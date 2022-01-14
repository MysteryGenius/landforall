<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-1/2 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1 space-y-6">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 5</h3>

					<h4 class="font-bold mont text-pink-journey">Embark on your own volunteering journey with these useful tips from Vihaan, a volunteer at ItsRainingRaincoats!</h4>

					<p class="text-pink-journey">
						Vihaan has been actively giving back to the migrant worker community. At the tender age of 10, he participated in various activities such as giving migrant workers free English lessons, and even initiating a donation drive of tennis balls for the migrant workers’ recreational use.
					</p>
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CKqxv7ThSQQ/?igshid=1g5pinpqpyyk'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">"(Volunteering) has made me a bigger, more grateful and happier person in general." – Vihaan Iyer, ItsRainingRaincoats</h4>

				<p class="font-bold mont text-pink-journey">"Small contributions add up to make a big difference. Simple gestures carried out within your own means like handing out food to migrant workers or sparking conversations help contribute to the cause of migrant worker welfare as well. </p>
				<p class="mont text-pink-journey">
					The smallest acts of kindness will not only make you feel good, but also make the migrant workers feel more welcome in our society! 
				</p>

				<h5 class="font-bold mont text-pink-journey">About Vihaan</h5>
				<p class="text-pink-journey">
					Vihaan Iyer started volunteering 5 years ago at ItsRainingRaincoats, when the welfare organisation was founded by his mother, Ms Dipa Swaminathan. He is currently involved with teaching our migrant workers English, being the bridge between potential youth volunteers and migrant workers, and advocating for migrant worker welfare. He also initiated Yellowship, a Facebook community group, which recycles tennis balls and donates them to migrant workers for them to engage in physio exercises and other sports activities in their free time. 
				</p>

				<h5 class="font-bold mont text-pink-journey">Interested in becoming a volunteer?</h5>
				<p class="text-pink-journey underline">
					<a href="https://www.facebook.com/itsrainingraincoats">Find out how here</a>
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