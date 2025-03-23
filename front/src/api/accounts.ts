import axios from "axios";

const API_URL: string = "http://localhost:5007/api/";

export async function getUsers() {
	const responce = await axios.get<string[]>(API_URL + "users");
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return responce.data;
}
