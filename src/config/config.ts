import "dotenv/config";

interface Config {
	username: string;
	password: string;
	database: string;
	db_port: number;
	server_port: number;
	host: string;
	dialect: string;
}

export const config: Readonly<Config> = {
	username: `${process.env.EASY_CASH_DB_USER}`,
	password: `${process.env.EASY_CASH_DB_PASSWORD}`,
	database: `${process.env.EASY_CASH_DB_NAME}`,
	db_port: Number(process.env.DB_PORT),
	server_port: Number(process.env.SERVER_PORT),
	host: `${process.env.HOST}`,
	dialect: "mysql",
};
