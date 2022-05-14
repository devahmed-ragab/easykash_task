import DB_ENV, { config } from "../../config/config";
import { MODELS } from "../../models/models.index";
import { sequelize } from "../../sequelize";

beforeAll(async () => {
	sequelize.addModels(MODELS);
	await sequelize.sync({ force: true });
});

afterAll(async function () {
	try {
		if (config.env == DB_ENV.dev) {
			// await Seller.destroy({ truncate: true, cascade: true, restartIdentity: true });
			// await Transaction.destroy({ truncate: true, cascade: true, restartIdentity: true });
		}
		return;
	} catch (err) {
		console.log(err);
		return;
	}
});
