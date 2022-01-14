<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-12 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 2</h3>

					<p class="mont mt-4 text-pink-journey">
						Start your own journey and give back to our migrant workers using these tips from Catherine!
					</p>

					<p class="mont mt-4 text-pink-journey">
						Raising funds for a good cause is one way we can give back to society. From selling prints to giving tuition, Catherine found herself surrounded by friends who contributed to the migrant worker welfare movement by donating a portion of their earnings to a Non-Governmental Organisation (NGO). 
					</p>
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CKWESpws8D7/?igshid=5khwcgzjsxyp'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">
				“There are more diverse ways to contribute to migrant worker welfare apart from donating money.” – Catherine Kausikan</h4>

				<p class="text-pink-journey">
					There are other ways you can help migrant workers besides making monetary donations. You can volunteer with the NGOs by participating in online activities such as the WeTalk!, a language exchange programme hosted by the COVID-19 Migrant Support Coalition (CMSC), and even share posts on migrant worker welfare on your social media platforms. These help to spark meaningful online conversations about migrant workers. 

				</p>

				<h5 class="font-bold mont text-pink-journey">About Catherine</h5>
				<p class="text-pink-journey">
					Catherine Kausikan has been volunteering with the CMSC since August 2020. As the volunteer management head, she is responsible for the on-boarding of volunteers  and  organising activities for the migrant workers. She is also in charge of WeTalk!, a language exchange programme.
				</p>
			</div>

			<div>
				<h4 class="font-bold mont text-pink-journey">Interested to be a volunteer? Find out how <a href="#" class="underline">here</a>.</h4>
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