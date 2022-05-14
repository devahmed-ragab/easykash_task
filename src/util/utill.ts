import { Seller } from "../models/Seller";
import { Transaction } from "../models/Transaction";
import { Duration } from "./types";

export function dateFromDuration(duration: Duration): string[] {
	const durationArray = duration.split("to");
	const dates: string[] = [];

	const startDate = new Date(durationArray[0]).toISOString();
	const endDate = new Date(durationArray[1]).toISOString();

	dates.push(startDate);
	dates.push(endDate);

	console.log("dates = ", dates);
	return dates;
}

export async function generateData(num: number): Promise<void> {
	/**
	 *  Generate Dumy data in database
	 */
	for (let index = 0; index < num; index++) {
		try {
			const seller = await Seller.create({
				name: `dumy${index}`,
			});
			await Transaction.create({
				title: "dumy",
				image: `domain/image${index}.com`,
				price: index * 2 + 1 / 2,
				sellerId: seller.id,
			});
		} catch (e) {
			console.log(e);
		}

		console.log(`created record: ${index}`);
	}
}
