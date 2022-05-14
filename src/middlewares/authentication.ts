import { Request, Response, NextFunction } from "express";
import "dotenv/config";

function authenticateToken(req: Request, res: Response, next: NextFunction) {
	const auth = req.headers.authorization;
	const token = auth?.split(" ")[1];

	if (token === undefined || token == "") {
		res.status(417).json("TOKEN IS REQUIRED.");
		return;
	}

	if (token != "ABC") {
		res.status(401);
		res.json("Access denied, invalid token.");
		return;
	}

	next();
}

export default authenticateToken;
