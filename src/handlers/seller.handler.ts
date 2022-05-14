import { Request, Response, Application } from "express";

import { Seller } from "../models/Seller";
import { Transaction } from "../models/Transaction";

async function create(req: Request, res: Response): Promise<void> {
	try {
		const create = await Seller.update(
			{
				name: "ahmed9",
			},
			{ where: { id: 3 } }
		);
		res.status(201);
		res.json(create);
	} catch (err) {
		console.log(err);
		res.status(201);
		res.json("couldn't create seller");
	}
}

export const seller_routes = (app: Application): void => {
	app.get("/seller", create);
};
