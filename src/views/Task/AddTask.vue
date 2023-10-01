<template lang="">
	<div>
		<form
			class="bg-white p-4 rounded-2xl flex gap-4 relative"
			@submit.prevent="addTask">
			<div class="pt-0 w-[100%]">
				<input
					type="text"
					placeholder="Placeholder"
					class="px-3 py-2 placeholder-slate-500 text-slate-800 relative bg-blue-100 rounded-lg border-0 shadow outline-none focus:outline-none ring w-full text-lg"
					v-model="task" />
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-10 py-1.5 text-center flex items-center gap-2 absolute right-4 top-4">
				<i class="bx bxs-plus-square text-2xl"></i>
				ADD
			</button>
		</form>
	</div>
</template>
<script>
import { tasks } from "../../services/task";
import { auth } from "../../services/auth";

export default {
	name: "AddTask",
	data() {
		return {
			task: "",
		};
	},

	methods: {
		async addTask() {
			let { data } = await auth.GETUSER();
			const newUser = {
				task: this.task,
				user_id: data._id,
				is_checked: false,
			};
			try {
				await tasks.CREATE(newUser);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>
<style></style>
