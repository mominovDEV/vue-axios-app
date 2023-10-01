<script setup>
import AddTask from "./AddTask.vue";
import { ref, reactive, onMounted } from "vue";
import { tasks } from "../../services/task";

let tasklar = ref([]);

const getTask = async () => {
	try {
		const res = (await tasks.GET()).data;
		tasklar = res;
		console.log(tasklar);
	} catch (err) {
		console.log(err);
	}
};

onMounted(() => {
	console.log("mounting");
	getTask();
});
</script>
<template lang="">
	<div>
		<AddTask />
		<!-- <h2 v-if="!tasks.length" class="text-center text-5xl text-zinc-500 p-8">
			NO TASKS YET !!!
		</h2> -->
		<div>
			<router-link
				v-for="(el, index) in tasklar"
				:key="el._id"
				:to="'/tasks/' + el._id"
				class="block max-w-full py-4 px-8 bg-white shadow-lg rounded-2xl my-3">
				<div class="flex items-center justify-between">
					<span class="text-gray-800 text-2xl font-semibold"
						>{{ index + 1 }}.</span
					>
					<span
						class="text-gray-800 text-2xl font-semibold w-[100%] text-center"
						>{{ el.task }}</span
					>
					<div class="flex items-center justify-between text-2xl w-[150px]">
						<i
							class="bx bx-check-circle text-red-600 text-3xl cursor-pointer hover:scale-110 duration-200"></i>
						<i
							class="bi bi-trash text-red-600 cursor-pointer hover:scale-110 duration-200"></i>
						<i
							class="bi bi-pen text-green-600 cursor-pointer hover:scale-110 duration-200"></i>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<style></style>
