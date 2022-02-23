<template>
	<div class="thermometer-content">
		<vue-thermometer
			:value="displayNumber"
			:min="0"
			:max="45"
			:options="{thermo: {color: thermometerColor}}"
		/>
		<div class="text">
			<p> A temperatura hoje está de </p>
			<span> {{ displayNumber }}º C </span>
			<p @click="generateNumber()"> <span v-html="getWeather"></span> </p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'HelloWorld',
	props: {msg: String},

	data() {
		return {
			number: 3,
			thermometerColor: '#ff0000',
			displayNumber:0,
			interval:false
		}
	},

	computed: {
		getWeather() {
			if (this.number >= 33) return 'olavo de carvalho: &#128128;';
			if (this.number >= 27) return 'quente pra caralho &#128526;';
			if (this.number >= 20) return 'de boa até &#128517;';
			if (this.number >= 10) return 'fresquinho &#128522;';
			if (this.number >= 0) return 'quase congelando &#129398;';
			return 'frio pra caralho &#129482;';
		}
	},

	mounted() {

		setInterval(this.generateNumber, 1000);

	},

	methods: {
		generateNumber() {
			this.number = Math.floor(Math.random() * (44 - 0 + 1) + 0)
		},
	},

	watch: {
		number () {
			clearInterval(this.interval);

			if(this.number == this.displayNumber) return;

			this.interval = setInterval(() => {
				if(this.displayNumber != this.number) {
					let change = (this.number - this.displayNumber) / 10;
					change = change >= 0 ? Math.ceil(change) : Math.floor(change);
					this.displayNumber = this.displayNumber + change;
				}
			}, 20);
		}
	}

}

</script>

<style scoped>
	.thermometer-content {
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		font-size: 20px;
		padding: 0px 20px 0px 20px;
		color: black
	}

	.text span {
		font-size: 30px;
	}

	.vue-thermometer {
		color: black;
	}

</style>
