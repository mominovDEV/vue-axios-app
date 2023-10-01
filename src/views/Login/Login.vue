<template>
	<div
		class="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
		<div class="relative py-3 sm:max-w-xl sm:mx-auto">
			<div
				class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
			<div
				class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
				<div class="max-w-md mx-auto">
					<div>
						<h1 class="text-2xl font-semibold text-center text-gray-700">
							SIGN IN
						</h1>
					</div>
					<form
						method="POST"
						@submit.prevent="auth"
						class="divide-y divide-gray-200">
						<div
							class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div class="relative">
								<input
									autocomplete="off"
									id="text"
									name="text"
									type="text"
									class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Username"
									v-model="username" />
								<label
									for="text"
									class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>Username</label
								>
							</div>
							<div class="relative">
								<input
									autocomplete="off"
									id="password"
									name="password"
									type="password"
									class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Password"
									v-model="password" />
								<label
									for="password"
									class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>Password</label
								>
							</div>
							<div class="relative text-center">
								<button
									class="bg-blue-500 text-white rounded-md px-8 mt-5 py-1">
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from "../../services/auth";

export default {
	name: "Login",
	data() {
		return {
			username: "",
			password: "",
		};
	},

	methods: {
		auth() {
			const newUser = {
				username: this.username,
				password: this.password,
			};

			if (
				newUser.username.trim().length == 0 ||
				newUser.password.trim().length == 0
			) {
			} else {
				auth
					.LOGIN(newUser)
					.then((res) => {
						this.$router.push({ name: "Home" });
						localStorage.setItem("token", response?.data?.tokens?.access_token);
						localStorage.setItem("username", response.data.user.username);
						this.$store.commit("SET_USERNAME", response.data.user.username);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
	},
};
</script>

<style></style>
