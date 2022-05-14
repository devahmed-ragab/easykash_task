import "dotenv/config";

interface Config {
	username: string;
	password: string;
	database: string;
	db_port: number;
	server_port: number;
	host: string;
	dialect: string;
	env: string;
}

enum DB_ENV {
	test = "test",
	dev = "dev",
	prodaction = "prodaction",
}

let db_name = "";

switch (process.env.NODE_ENV) {
	case DB_ENV.dev:
		db_name = String(process.env.EASY_CASH_DB_NAME) ?? "";
		break;
	case DB_ENV.test:
		db_name = String(process.env.EASY_CASH_DB_NAME_TEST) ?? "";
		break;
	case DB_ENV.prodaction:
		db_name = "";
		break;
}

export const config: Readonly<Config> = {
	username: `${process.env.EASY_CASH_DB_USER}`,
	password: `${process.env.EASY_CASH_DB_PASSWORD}`,
	database: db_name,
	db_port: Number(process.env.DB_PORT),
	server_port: Number(process.env.SERVER_PORT),
	host: `${process.env.HOST}`,
	dialect: "mysql",
	env: `${process.env.NODE_ENV}`,
};

export default DB_ENV;
