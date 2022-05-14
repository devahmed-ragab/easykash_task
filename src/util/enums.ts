export enum SuccessTransaction {
	status = "success",
	allTransactions = "Transactions returned successfully.",
	oneTransaction = "Retun Transaction successfully",
}

export enum BadTransaction {
	status = "faild",
	allTransactions = "Something Wrong Happend Couldn't fetch Transactions.",
}

export enum HttpStatus {
	ok = 200,
	created = 201,
	badReq = 400,
	Unauthorized = 401,
}
