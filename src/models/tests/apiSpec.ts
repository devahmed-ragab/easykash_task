import supertest from "supertest";

import app from "../../app";
import { HttpStatus } from "../../util/enums";

const request = supertest(app);

describe("API: ", () => {
	describe("Transaction: ", () => {
		it("should require Token", async () => {
			const res = await request.get(`/transactions?page=1&per_page=10&seller_id=9&date_range=2015to2023`);
			expect(res.status).toBe(417);
		});

		it("All quiry attributes should be required", async () => {
			const res = await request
				.get(`/sellers/transactions-summary`)
				.query({ per_page: 1 })
				.set("Authorization", `Token ABC`);
			expect(res.status).toBe(HttpStatus.badReq);
		});
	});

	describe("Seller: ", () => {
		it("should require Token", async () => {
			const res = await request
				.get(`/sellers/transactions-summary?seller_id=1&date_range=2011to2023`)
				.query({ seller_id: 1, date_range: "2015to2020" });
			expect(res.status).toBe(HttpStatus.missingToken);
		});

		it("All quiry attributes should be required", async () => {
			const res = await request
				.get(`/sellers/transactions-summary`)
				.query({ seller_id: 1 })
				.set("Authorization", `Token ABC`);
			expect(res.status).toBe(HttpStatus.badReq);
		});
	});
});
