import { createStore } from "vuex";
import authStore from "../modules/auth";
import taskStore from "../modules/task";

export const store = createStore({
	modules: { authStore, taskStore },
});
