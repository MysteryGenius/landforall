<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-1/2 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1 space-y-6">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 6</h3>

					<p class="mont text-pink-journey">Having adequate food is important for migrant workers as they take on physically demanding job scopes.</p>

					<p class="text-pink-journey">
						Under the Employment of Foreign Manpower Act, employers are responsible for the upkeep and maintenance of the migrant workers in Singapore which includes the provision of adequate food and medical treatment.
					</p>

					<p class="mont text-pink-journey">"For migrant workers residing in a dormitory, employers must ensure that they have access to food and daily supplies.</p>
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CKxo9BwDKsg/'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">Various type of food provision</h4>

				<p class="mont text-pink-journey">There is a range of practices for the migrant workers regarding their food provision. They can choose to:</p>
				<ol class="mont text-pink-journey">
					<li>1. Cook and bring their meals</li>
					<li>2. Purchase cooked meals at the dormitory or worksite canteen</li>
					<li>3. Be given a catered packed meal by their employers</li>
				</ol>

				<h4 class="font-bold mont text-pink-journey">Feedback to Employers</h4>
				<p class="text-pink-journey">
					Some migrant workers may receive packed meals from a caterer, arranged by their employers. If such meals do not meet their dietary preferences, the workers should provide feedback to their employers, so that their employer can work with the caterer to improve the packed meals.
				</p>

				<h4 class="font-bold mont text-pink-journey">Feedback to MOM</h4>
				<p class="text-pink-journey">
					FAST officers are deployed to the dormitories regularly to engage migrant workers about their welfare.
				</p>
				<p class="text-pink-journey">
					Migrant workers who face issues with access to adequate and proper food or other well-being concerns should report their cases to MOM.
				</p>
				<p class="text-pink-journey">
					MOM will address the issues raised with employers and rectify them as soon as possible. In serious cases, MOM will take appropriate enforcement action.
				</p>

				<h4 class="font-bold mont text-pink-journey ">Learn more about:</h4>
				<div class="mx-auto block md:flex space-x-10">
					<p class="flex-1 text-pink-journey mont underline">
						<a href="https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2021/0104-written-anwer-by-mrs-josephine-teo-minister-for-manpower-to-pq-on-food-for-migrant-workers">
							What is being done for migrant workers to have proper food provision
						</a>
					</p>

					<p class="flex-1 text-pink-journey mont underline">
						<a href="https://www.mom.gov.sg/newsroom/press-releases/2020/0501-comprehensive-approach-to-take-care-of-the-well-being-of-foreign-workers-living-in-dormitories">
							Taking care of migrant workers living in dormitories
						</a>
					</p>
				</div>
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