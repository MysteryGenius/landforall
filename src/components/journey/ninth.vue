<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-12 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 9</h3>
					
					<h4 class="font-bold mont text-pink-journey">Vault Of Stories Episode 3: Hasan and Kabir</h4>

					<iframe width="560" height="315" src="https://www.youtube.com/embed/OvOCw-DjBkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">
					“Before coming to Singapore, I’ve never gotten on a train.” – Hasan Md Mahmudul, Workplace Safety and Health Supervisor
				</h4>

				<h4 class="font-bold mont text-pink-journey">
					“The faster I make money, (the faster) I can go back and live with my family” – Homoyan Kabir, Safety Supervisor
				</h4>

				<h5 class="font-bold mont text-pink-journey">About Hasan and Kabir:</h5>
				<p class="text-pink-journey">
					Hasan is a Workplace Safety and Health Supervisor who has been working in Singapore for 8 years now. He enjoys coding websites in his free time and is also a volunteer with COVID-19 Migrant Support Coalition (CMSC) as a participant in their language and cultural exchange programme, WeTalk!
				</p>

				<p class="text-pink-journey">
					Kabir, a Safety Supervisor, has been working in Singapore for a decade. He is family-oriented and video calls his family often to catch up with them in his free time. Kabir also volunteers with Migrant Workers’ Centre (MWC), by educating the other migrant workers about COVID-19 and the steps to take for a safe work environment.
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