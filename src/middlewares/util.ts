import { Request, Response, NextFunction } from "express";

export function loger(req: Request, res: Response, next: NextFunction): void {
	const date = new Date().toLocaleString();
	// eslint-disable-next-line no-console
	console.log(`"${req.url}" : Time > ${date}: by > ${req.socket.remoteAddress}.`);
	next();
}
