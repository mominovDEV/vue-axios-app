import axios from "./axios";

export const auth = {
	LOGIN: async (payload) => await axios.post("/auth/login", payload),
	GETUSER: async () =>
		await axios.post("/auth/getuser", {
			token: localStorage.getItem("token"),
		}),
};
console.log(auth);
