import { dateFromDuration } from "../utill";

describe("Utillite", () => {
	describe("dateFromDuration Function: ", () => {
		const durationDate = "2015to2020";

		it("should be defined.", async () => {
			expect(dateFromDuration).toBeDefined();
		});

		it("should retun array.", async () => {
			const len = dateFromDuration(durationDate).length;
			expect(len).toBe(2);
		});

		it("array shoyld contain data in Iso format.", async () => {
			const arr = dateFromDuration(durationDate);
			const date = new Date("2015").toISOString();
			expect(arr[0]).toBe(date);
		});
	});
});
