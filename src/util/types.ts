export type Duration = `${string | number}to${string | number}`;
export type CustomError = {
	error: {
		status: number;
		message: string;
	};
};

