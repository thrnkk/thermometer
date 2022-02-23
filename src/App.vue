<template>
	<div id="app">
		<div class="header">
			<div class="buttons">
				<div class="button" style="background-color: red"></div>
				<div class="button" style="background-color: #fcba03"></div>
				<div class="button" style="background-color: #1fe800"></div>
			</div>
		</div>
		<Thermometer class="thermometer" msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
import Thermometer from './components/Thermometer.vue'

export default {
	name: 'App',
	components: {Thermometer}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
