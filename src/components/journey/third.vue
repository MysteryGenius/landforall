<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-12 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 3</h3>

					<p class="mont mt-4 text-pink-journey">
						While working in Singapore, our migrant workers live in various types of housing. This may include Purpose-Built Dormitories (PBDs), Factory-Converted Dormitories (FCDs), temporary on-site quarters in construction sites and other types of housing premises. Employers must ensure that their migrant workers have acceptable accommodation, and housing arrangements are made, taking into consideration their workers’ preferences.
					</p>

					<p class="mont mt-4 text-pink-journey">
						MOM conducts regular inspections of migrant workers’ housing premises. For premises that are found in overcrowded, unsanitary or other unacceptable conditions, employers and dorm operators will be taken to task. <b>Let’s take a look at some of the housing rules that protect our migrant workers!</b>
					</p>
					
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CKgQqXxhA4n/?igshid=1wfg3k09fpe52'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-black mont text-pink-journey">Keeping A Close Watch on Larger Dorms</h4>

				<p class="text-pink-journey">
					All dorms are subjected to requirements imposed by various agencies (e.g. SCDF, NEA, MOM, MOH, URA etc), to ensure a safe and well-maintained living space for migrant workers.
				</p>
				<p class="text-pink-journey">
					Since 2015, the Foreign Employee Dormitories Act (FEDA) requires all large dorms (that are able to house 1,000 workers or more) to apply for a licence.These dorms must meet additional requirements, which aim to address complexities that come with a high concentration of workers. They will need to meet security and health requirements, and put in place social, recreational and commercial amenities for their residents.
				</p>
				<p class="text-pink-journey">
					While dorms are a practical approach to housing our migrant workers in a land-scarce Singapore, the authorities are piloting improved standards to make dorm living and design more resilient to public health risks, taking on board lessons learnt from the Covid-19 pandemic.
				</p>

				<h4 class="font-black mont text-pink-journey">Adequate, Clean, Tidy and Safe Housing for Workers</h4>

				<p class="text-pink-journey">
					To ensure that our migrant workers have adequate, clean and safe housing, all dorms need to meet a minimum living space (of 4.5 sqm) per pax. This ensures that our migrant workers have a sufficient living space. They must also be kept clean and tidy and meet requirements (e.g. fire safety). Migrant workers, too, need to play their part to keep their housing premises clean, tidy and safe!
				</p>

				<h4 class="font-black mont text-pink-journey">Housing Amenities and Living Standards</h4>

				<p class="text-pink-journey">
					Besides the basic necessities such as beds, toilets and lockable cabinets, other amenities that keep our migrant workers comfortable must be provided too, especially at dorms. These include facilities such as gymnasiums, recreational rooms and minimarts.
				</p>

				<h4 class="font-black mont text-pink-journey">Improving Standards and Piloting New Dorm Operating Model</h4>

				<p class="text-pink-journey">
					The authorities are developing a new set of standards for the upcoming dorms, with improved design, facilities, management and regulations. These include more living spaces for workers, less occupancy per room, and more toilets and sick bay facilities.
				</p>
			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-black mont text-pink-journey">Various types of housing for Migrant Workers: Amenities and Living Standards</h4>

				<h5 class="font-black mont text-pink-journey">Purpose-built Dormitories (PBDs)</h5>
				<div>
					<carousel :per-page="1" :navigate-to="someLocalProperty" autoplay="true">
						<slide>
							<img src="../../assets/journey/PBD/Slide03.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide04.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide05.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide06.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide07.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide08.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/PBD/Slide09.jpg">
						</slide>
					</carousel>
					<ul class="my-6 space-y-4">
						<li class="text-pink-journey">Specially designed for migrant workers to live and enjoy spending time in</li>
						<li class="text-pink-journey">Equipped with recreational and sports facilities, shops (eg.Minimart) and other services</li>
					</ul>
				</div>

				<h5 class="font-black mont text-pink-journey">Factory-Converted Dormitories (FCDs)</h5>
				<div>
					<carousel :per-page="1" :navigate-to="someLocalProperty" autoplay="true">
						<slide>
							<img src="../../assets/journey/FCD/Slide11.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/FCD/Slide12.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/FCD/Slide13.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/FCD/Slide14.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/FCD/Slide15.jpg">
						</slide>
					</carousel>
					<ul class="my-6 space-y-4">
						<li class="text-pink-journey">Partly repurposed industrial developments to provide amenities that meet the migrant worker needs (eg. recreation rooms, dining halls, and sports facilities)</li>
						<li class="text-pink-journey"> Situated near their workplaces for convenience.</li>
					</ul>
				</div>

				<h5 class="font-black mont text-pink-journey">Construction Temporary Quarters (CTQs)</h5>
				<div>
					<carousel :per-page="1" :navigate-to="someLocalProperty" autoplay="true">
						<slide>
							<img src="../../assets/journey/CTQ/Slide17.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/CTQ/Slide18.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/CTQ/Slide19.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/CTQ/Slide20.jpg">
						</slide>
					</carousel>
					<ul class="my-6 space-y-4">
						<li class="text-pink-journey">Standalone temporary quarters in construction sites.</li>
						<li class="text-pink-journey">
							May not be for long-term use, but are still similarly designed to dorms and done according to safety and health measurements.
						</li>
					</ul>
				</div>

				<h5 class="font-black mont text-pink-journey">Quick Build Dormitories (QBDs)</h5>
				<div>
					<carousel :per-page="1" :navigate-to="someLocalProperty" autoplay="true">
						<slide>
							<img src="../../assets/journey/QBD/Slide22.jpg">
						</slide>
						<slide>
							<img src="../../assets/journey/QBD/Slide23.jpg">
						</slide>
					</carousel>
					<ul class="my-6 space-y-4">
						<li class="text-pink-journey">Temporary structures that can be constructed quite quickly in a modular form with a low density</li>
						<li class="text-pink-journey">Each QBD houses about 500-1000 workers per hectare, depending on the site conditions.</li>
					</ul>
				</div>

				<h4 class="font-black mont text-pink-journey">Learn more about the requirements for the various types of housing!</h4>

				<p>
					<a class="text-pink-journey mt-4 underline" href="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/housing/various-types-of-housing">
						Types of housing for migrant workers
					</a>
				</p>
				<p>
					<a class="text-pink-journey mt-4 underline" href="https://mom.gov.sg/newsroom/press-releases/2020/0601-joint-mnd-mom-media-release-on-new-dormitories-with-improved-standards-for-migrant-workers">
						Media release on new dorms with improved standards for migrant workers
					</a>
				</p>
			</div>

		</div>
	</transition>
</template>
<script>
	import embedo from '../partials/embedo.vue'
	import { Carousel, Slide } from 'vue-carousel';
	export default {
		components: {
			embedo,
			Carousel,
			Slide
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