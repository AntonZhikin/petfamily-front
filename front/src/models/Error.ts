import { ErrorType } from "../api/accounts";

export type Error = {
	code: string;
	message: string;
	type: ErrorType;
	invalidField: string | null;
};
