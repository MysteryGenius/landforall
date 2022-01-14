<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-1/2 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 4</h3>
					
					<h4 class="font-bold mont text-pink-journey">Vault Of Stories Episode 1: Nicholas and Fatima</h4>

					<iframe width="560" height="315" src="https://www.youtube.com/embed/VVrZg3-3D0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">"We wouldn’t be able to do a lot of operations work and content building (without youths)." – Nicholas Chan, CMSC</h4>

				<h5 class="font-bold mont text-pink-journey">"(Youths) are our future, they’re going to be the leaders of tomorrow." – Fatima Ying, MWC</h5>


				<h5 class="font-bold mont text-pink-journey">About the organisations:</h5>
				<p class="text-pink-journey">
					<b>The COVID-19 Migrant Support Coalition (CMSC)</b> is a volunteer-run organisation which aims to help meet the needs of our migrant workers affected by COVID-19, and to be the driving force to strengthen inclusivity in Singapore.
				</p>

				<p class="text-pink-journey">
					<b>The Migrant Workers’ Centre (MWC)</b> is a non-governmental organisation which aims to champion fair employment practices, and to promote the overall well-being of migrant workers.
				</p>

			</div>

		</div>
	</transition>
</template>
<script>
	export default {
		components: {
		},
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>