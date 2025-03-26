import axios, { AxiosResponse } from "axios";
import { Envelope } from "../models/Envelope";
import { LoginResponce } from "../models/LoginResponce";
import { api, API_URL } from "./api";

export enum ErrorType {
	Validation = 0,
	NotFound,
	Failure,
	Conflict,
}

export class AccountsService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<Envelope<LoginResponce>>> {
		return api.post<Envelope<LoginResponce>>("accounts/login", {
			email,
			password,
		});
	}

	static async refresh() {
		return axios.post<Envelope<LoginResponce>>(
			API_URL + "accounts/refresh",
			{},
			{
				withCredentials: true,
			}
		);
	}

	static async logout() {
		return api.post<Envelope<LoginResponce>>("accounts/logout");
	}
}
