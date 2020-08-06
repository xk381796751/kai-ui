<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<div>
		导航栏 |
		<router-link to="/">Kai</router-link>|
		<router-link to="/xxx">Kai2</router-link>
	</div>
	<hr />
	<router-view />
</template>

<script>
export default {
	name: "App"
};
</script>
