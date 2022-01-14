<template>
	<footer class="bg-blue-200 mont" v-bind:class="{ green: !hutActive, yellow: !journeyActive, orange: !bounceActive }">
		<section class="mb-6">
			<div class="max-w-4xl mx-auto md:flex md:space-x-16 px-12">
				<img src="../../assets/images/footer.png" class="md:w-64 w-20 object-scale-down relative top-6 -left-8">
				<div class="px-6 py-5 rounded-xl text-gray-100 mb shadow" v-bind:class="{ 'bg-green-main': !hutActive, 'bg-yellow-main': !journeyActive, 'bg-orange-main': !bounceActive }">
					<h3 class="text-2xl mb-6 font-bold">Hello fellow adventurers!</h3>

					<p class="mb-4">
						We are <span class="font-bold">Jupiter</span>, a group of students from Ngee Ann Polytechnic. We’re working in collaboration with the <span class="font-bold">Ministry of Manpower (MOM)</span> to bring you <span class="font-bold">A Land For All!</span> 	
					</p>

					<p class="mb-4">
						A Land For All aims to bring you the latest information about MOM’s policies and how they help our migrant workers. We also want to shine light on the well-being of migrant workers and how you (yes, YOU) can contribute to protecting their well-being.
					</p>
				</div>
			</div>
		</section>

		<section class="md:flex">
			<div class="mx-auto">
				<div class="flex flex-col max-w-xl justify-around">
					<h4 class="text-center font-bold text-white text-xl">Continue the adventure</h4>
					<div class="flex justify-around my-6">
						<router-link v-if="bounceActive" :to="{name: 'main'}" class="text-gray-500 inline-flex items-center px-1 pt-1 text-base font-bold">
							<img class="w-32" src="../../assets/logos/bounce.png">
						</router-link>

						<router-link v-if="journeyActive" :to="{name: 'journey'}" class="text-gray-500 inline-flex items-center px-1 pt-1 text-base font-bold">
							<img class="w-32" src="../../assets/logos/journey.png">
						</router-link>

						<router-link v-if="hutActive" :to="{name: 'hut'}" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-base font-bold">
							<img class="w-32" src="../../assets/logos/hut.png">
						</router-link>
					</div>
					
				</div>
			</div>

			<div class="mx-auto px-2">
				<div class="flex flex-col max-w-xl ">
					<h4 class="text-center font-bold text-white text-xl">Follow our socials</h4>
					<div class="flex flex-col justify-around my-6">
						<a href="https://www.facebook.com/alandforall/" class="text-white hover:text-gray-100 inline-flex items-center pt-4 text-4xl font-bold mx-auto">
							<img class="h-8 w-8" src="../../assets/logos/fb.png">
							<p class="text-xl ml-4">@alandforall</p>
						</a>
						<a href="https://www.instagram.com/alandforall/" class="text-white hover:text-gray-100 inline-flex items-center pt-4 text-4xl font-bold mx-auto">
							<img class="h-8 w-8" src="../../assets/logos/ig.png">
							<p class="text-xl ml-4">@alandforall</p>
						</a>
						<a href="https://www.youtube.com/channel/UCjcO_FaqbvRUumxPrRx1pXQ" class="text-white hover:text-gray-100 inline-flex items-center pt-4 text-4xl font-bold mx-auto">
							<img class="h-8 w-8" src="../../assets/logos/yt.png">
							<p class="text-xl ml-2">A Land for All</p>
						</a>
					</div>
					
				</div>
			</div>
		</section>
	</footer>
</template>

<script>
	export default {
    data() {
      return {
        bounceActive: false,
        journeyActive: false,
        hutActive: false,
      };
    },
		created() {
			this.handleRoute(this.$route.name)
		},
		watch: {
			'$route'() {
				this.handleRoute(this.$route.name)
			}
		},
		methods: {
			scrollToTop() {
				window.scrollTo(0,0);
			},
			handleRoute(curr) {
				if (curr === 'main') {
					this.scrollToTop()
					this.bounceActive = false;
					this.journeyActive = true;
					this.hutActive = true

				}
				if (curr === 'journey') {
					this.scrollToTop()
					this.bounceActive = true;
					this.journeyActive = false;
					this.hutActive = true
				}
				if (curr === 'hut' || curr === 'quiz' || curr === 'thank') {
					this.scrollToTop()
					this.bounceActive = true;
					this.journeyActive = true;
					this.hutActive = false
				}
			}
		}
  }
</script>