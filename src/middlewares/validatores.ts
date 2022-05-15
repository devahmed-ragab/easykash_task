import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../util/enums";
import { Transaction } from "../models/Transaction";
import { Seller } from "../models/Seller";
import { CustomError } from "../util/types";
// err instanceof Error ? err.message
export function validateTransaction(req: Request, res: Response, next: NextFunction) {
	const query = req.query;
	try {
		for (const attr of Transaction.mustAttributes) {
			const value = query[attr];

			if (attr != "date_range" && isNaN(Number(value))) {
				throw new Error(`Properity ${attr} is requierd as a number.`);
			} else {
				if (attr.toLowerCase().includes("to")) {
					throw new Error("Invalid date_range structure.");
				}
			}
		}
		next();
		return;
	} catch (e) {
		const error: CustomError = {
			error: {
				status: HttpStatus.badReq,
				message: e instanceof Error ? e.message : "error",
			},
		};
		res.status(HttpStatus.badReq).json(error);
		return;
	}
}

export function validateSeller(req: Request, res: Response, next: NextFunction) {
	const query = req.query;
	console.log("query", query);
	for (const attr of Seller.mustAttributes) {
		const value = query[attr];
		const error: CustomError = {
			error: {
				status: HttpStatus.badReq,
				message: `${attr} is requierd as a number.`,
			},
		};

		if (value == undefined) {
			res.status(HttpStatus.badReq).json(error);
			return;
		}

		if (value == "seller_id" && isNaN(Number(attr))) {
			res.status(HttpStatus.badReq).json(error);
			return;
		}
	}

	next();
}
