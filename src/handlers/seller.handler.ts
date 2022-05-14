import { Request, Response, Application } from "express";
import { QueryTypes } from "sequelize";

import { Duration } from "../util/types";
import { dateFromDuration } from "../util/utill";
import { BadSeller, HttpStatus } from "../util/enums";

import { sequelize } from "../sequelize";
import auth from "../middlewares/authentication";
import { validateSeller } from "../middlewares/validatores";

async function index(req: Request, res: Response): Promise<void> {
	const sellerId = Number(req.query.seller_id);
	const dateRange = String(req.query.date_range);

	try {
		const duration = dateFromDuration(dateRange as Duration);

		const quiry = `
					select 
						s.name as seller_name,
						s.id as seller_id,
						Date(t.updatedAt) as date,
						sum(price) as total_income
					from transactions t
					join sellers s
					on s.id = t.sellerId
						where s.id = :sellerId and
						      t.updatedAt BETWEEN :startDate and :endDate
					group by Date(t.updatedAt), s.name, s.id;`;

		const result = await sequelize.query(quiry, {
			replacements: {
				sellerId: sellerId,
				startDate: duration[0],
				endDate: duration[1],
			},
			type: QueryTypes.SELECT,
		});

		res.status(HttpStatus.ok).json({ data: { days: result } });
	} catch (err) {
		res.status(HttpStatus.serverError).json({
			error: {
				status: BadSeller.status,
				message: BadSeller.allTransactions,
			},
		});
		console.log(err);
	}
}

export const seller_routes = (app: Application): void => {
	app.get("/sellers/transactions-summary", auth, validateSeller, index);
};
