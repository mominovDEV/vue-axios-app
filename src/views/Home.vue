<template lang="">
	<div class="flex">
		<Sidebar />
		<div class="p-3 bg-blue-400 w-full">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";

export default {
	components: {
		Sidebar,
	},
};
</script>
<style scoped></style>
