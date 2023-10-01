import axios from "./axios";

export const tasks = {
	GET: async () => await axios.get("/tasks"),
	CREATE: async (payload) => {
		await axios.post("/tasks", payload);
	},
	UPDATE: async (payload) => await axios.post("/users", payload),
};
