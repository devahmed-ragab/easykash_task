export enum SuccessTransaction {
	status = "success",
	allTransactions = "Transactions returned successfully.",
	oneTransaction = "Retun Transaction successfully",
}

export enum BadTransaction {
	status = "faild",
	allTransactions = "Something Wrong Happend Couldn't fetch Transactions.",
}

export enum BadSeller {
	status = "faild",
	allTransactions = "Something Wrong Happend Couldn't fetch seller summary.",
}

export enum HttpStatus {
	ok = 200,
	created = 201,
	badReq = 400,
	Unauthorized = 401,
	serverError = 500,
	missingToken = 417,
	invalidToken = 401,
}
