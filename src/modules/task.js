import axios from "../services/axios";
import { tasks } from "../services/task";

const taskStore = {
	state: async () => {
		tasks: (await tasks.GET()).data;
	},
	mutations: {
		SET_TASKS(state, task) {
			state.tasks.push(task);
		},
		async GET_TASKS() {
			console.log();
			// this.state.tasks = ;
			console.log(this.state.tasks);
			return this.state.tasks;
		},
	},
	actions: {},
};

export default taskStore;
