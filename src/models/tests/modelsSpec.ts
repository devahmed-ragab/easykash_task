import { Transaction } from "../Transaction";
import { Seller } from "../Seller";

describe("Models:", () => {
	let seller: Seller;
	describe("Seller:", () => {
		it("should create Seller", async () => {
			seller = await Seller.build({
				name: "sellerTest",
			});
			seller.save();
			expect(seller.name).toEqual("sellerTest");
		});
	});

	xdescribe("Transaction:", () => {
		it("should create Transaction", async () => {
			const seller = Seller.build({ name: "sellerTest2" });
			await seller.save();
			if (seller) {
				const t = await Transaction.build({
					title: "test",
					image: "test.com/jpeg",
					price: 33.5,
					sellerId: seller.id,
				});
				t.save();
				expect(t.title).toBe("test");
			} else {
				expect(seller).toBeTruthy();
			}
		});
	});
});
