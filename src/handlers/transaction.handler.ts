import { Request, Response, Application } from "express";

import { Op, col } from "sequelize";

import { BadTransaction, HttpStatus } from "../util/enums";
import { Transaction } from "../models/Transaction";
import { dateFromDuration } from "../util/utill";
import { Duration } from "../util/types";
import auth from "../middlewares/authentication";

async function index(req: Request, res: Response): Promise<void> {
	const perPage = Number(req.query.per_page);
	const { page, seller_id, date_range } = req.query;

	const offset = Number(page) * perPage - perPage;
	const totalTransactions = offset + perPage;

	try {
		const duration = dateFromDuration(date_range as Duration);

		const transactions = await Transaction.findAll({
			order: col("id"),
			offset,
			limit: perPage,
			attributes: ["id", "title", "image", "price", ["updatedAt", "last_updated"]],
			where: {
				sellerId: Number(seller_id),
				updatedAt: {
					[Op.between]: duration,
				},
			},
		});

		const paging = {
			total: totalTransactions,
			current_page: page,
			per_page: perPage,
		};
		const result_transaction = {
			data: {
				transactions: transactions,
				paging,
			},
		};

		res.status(HttpStatus.ok).json(result_transaction);
	} catch (err) {
		res.status(HttpStatus.badReq).json({
			error: {
				status: BadTransaction.status,
				message: BadTransaction.allTransactions,
			},
		});
		console.log(err);
	}
}

export const transaction_routes = (app: Application): void => {
	app.get("/transactions", auth, index);
};
