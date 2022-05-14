import { Seller } from "../models/Seller";
import { Transaction } from "../models/Transaction";

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
