<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-1/2 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 7</h3>
					
					<h4 class="font-bold mont text-pink-journey">Vault Of Stories Episode 2: Ms. Gerkiel Tey</h4>

					<iframe width="560" height="315" src="https://www.youtube.com/embed/5wWIrWL6czA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto"></iframe>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">
					“Strong teamwork and coordination between different agencies and partners is key to resolving many issues.” <br>
					Ms Gerkiel Tey <br>
					Senior Manager (Team Lead) <br>
					Housing Inspectorate <br>
					Foreign Manpower Management Division <br>
					Ministry of Manpower
				</h4>

				<h5 class="font-bold mont text-pink-journey">About the Foreign Manpower Management Division (FMMD):</h5>
				<p class="text-pink-journey">FMMD ensures effective management of the well-being of migrant workers through enforcement actions, licensing requirements, as well as engagement and educational efforts.</p>

				<h5 class="font-bold mont text-pink-journey">About the Housing Inspectorate (HI):</h5>
				<p class="text-pink-journey">
					The HI plays a pivotal role in ensuring that the living standards and general well-being of our migrant workers are not compromised.
				</p>

				<h5 class="font-bold mont text-pink-journey">About the Ministry of Manpower (MOM):</h5>
				<p class="text-pink-journey">
					MOM aims to develop a great workforce and a great workplace, which includes developing fair and progressive workplaces to ensure the well-being, health and safety of our workers.
				</p>

				<p class="flex-1 text-pink-journey mont underline">
						<a href="https://www.mom.gov.sg/about-us/vision-mission-and-values">
							Find out more here
						</a>
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