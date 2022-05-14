import DB_ENV, { config } from "../../config/config";
import { MODELS } from "../../models/models.index";
import { sequelize } from "../../sequelize";
// import { Transaction } from "../Transaction";
// import { Seller } from "../Seller";

beforeAll(async () => {
	if (config.env == DB_ENV.test) {
		sequelize.addModels(MODELS);
		await sequelize.sync({ force: true });
	}
});

afterAll(async function () {
	try {
		if (config.env == DB_ENV.test) {
			// await Transaction.destroy({ truncate: true, cascade: true, restartIdentity: true });
			// await Seller.destroy({ truncate: true, cascade: true, restartIdentity: true });
		}
		return;
	} catch (err) {
		console.log(err);
		return;
	}
});
