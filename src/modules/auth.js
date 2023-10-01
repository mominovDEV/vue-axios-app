import axios from "../services/axios";

const authStore = {
	state: () => {
		username: "";
	},
	mutations: {
		SET_USERNAME(state, username) {
			state.username = username;
		},
	},
	actions: {},
};

export default authStore;
