import { Request, Response, Application } from "express";
import { Op, col, fn } from "sequelize";

import { Seller } from "../models/Seller";
import { Duration } from "../util/types";
import { dateFromDuration } from "../util/utill";
import { Transaction } from "../models/Transaction";
import { BadSeller, HttpStatus } from "../util/enums";
import auth from "../middlewares/authentication";

async function index(req: Request, res: Response): Promise<void> {
	const sellerId = Number(req.query.seller_id);
	const dateRange = String(req.query.date_range);

	try {
		const duration = dateFromDuration(dateRange as Duration);
		console.log("-------------", duration);
		// { group: 'name' }
		// group: [sequelize.fn('date_trunc', 'day', sequelize.col('createdAt'))]
		const sellerSummary = await Seller.findOne({
			attributes: ["seller_name", "seller_id"],
			where: {
				sellerId: Number(sellerId),
				include: [
					{
						model: Transaction,
						attributes: [
							["updatedAt", "date"],
							[fn("SUM", col("price")), "total_income"],
						],
						where: {
							updatedAt: {
								[Op.between]: duration,
							},
						},
					},
				],
			},
		});

		res.status(HttpStatus.ok).json(sellerSummary);
	} catch (err) {
		res.status(HttpStatus.badReq).json({
			error: {
				status: BadSeller.status,
				message: BadSeller.allTransactions,
			},
		});
		console.log(err);
	}
}

export const seller_routes = (app: Application): void => {
	app.get("/sellers/transactions-summary", auth, index);
};
