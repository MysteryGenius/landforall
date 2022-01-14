<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-12 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 8</h3>

					<p class="mont mt-4 text-pink-journey font-bold">
						Be inspired to give back to migrant workers with Elly’s story from Welcome In My Backyard!
					</p>

					<p class="mont mt-4 text-pink-journey">
						Elly was unaware of the challenging times our migrant workers had faced in light of the pandemic when she had just returned to Singapore when the COVID-19 situation became increasingly serious. She only realised the gravity of the situation after joining Welcome in My Backyard (WIMBY) as a volunteer during the circuit breaker period.
					</p>

					<p class="mont mt-4 text-pink-journey">
						Even though she had little to no prior knowledge of the migrant worker community in Singapore, WIMBY still welcomed her with open arms.
					</p>
					
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CK8J3_5haaQ/?igshid=fzbrgi9f3nul'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-black mont text-pink-journey">"(The) people in volunteering organisations are very open-minded and nice. They don’t expect you to know everything - everyone needs to start somewhere." – Elly Chaw, Welcome In My Backyard</h4>

				<p class="text-pink-journey">
					After 8 months of volunteering with WIMBY, she has developed a deeper connection with the migrant worker community.
				</p>

				<h4 class="font-black mont text-pink-journey">About Elly</h4>

				<p class="text-pink-journey">
					Elly joined Welcome In My Backyard (WIMBY) in May 2020, where she started off as a volunteer for the social media team, before taking over to lead WIMBY’s media strategy team after 3 months. The 24-year-old discovered WIMBY while looking for a cause to invest her time in, and her passion for the migrant worker community has continued to grow ever since.
				</p>

				<h4 class="font-black mont text-pink-journey">Interested in becoming a volunteer?</h4>

				<p>
					<a class="text-pink-journey mt-4 underline" href="https://www.wimby.sg">
						Find out how here
					</a>
				</p>
			</div>

		</div>
	</transition>
</template>
<script>
	import embedo from '../partials/embedo.vue'
	export default {
		components: {
			embedo,
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