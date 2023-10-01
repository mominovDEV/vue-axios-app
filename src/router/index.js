import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomeView,
			children: [
				{
					path: "/tasks",
					name: "Tasks",
					component: () => import("../views/Task/Task.vue"),
				},
				{
					path: "/tasks:id",
					name: "TaskItem",
					component: () => import("../views/Task/TaskItem.vue"),
				},
				{
					path: "/addtask",
					name: "AddTask",
					component: () => import("../views/Task/AddTask.vue"),
				},
			],
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("../views/Login/Login.vue"),
		},
	],
});
router.beforeEach((to, from, next) => {
	if (to.name !== "Login" && !localStorage.getItem("token")) {
		next({ name: "Login" });
	} else {
		next();
	}
});
export default router;
