<template>
	<div class="md:mt-24 mt-16 relative">
		<section class="md:h-screen green overflow-hidden">
			<!-- <img src="../assets/images/comingsoonmobile.png" class="md:-mt-24 -mt-16" v-if="isMobile()">
			<img src="../assets/images/comingsoon.png" class="md:-mt-24 -mt-16" v-else> -->
			<div class="relative overflow-hidden md:h-screen">
				<div class="max-w-7xl mx-auto">
					<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main class="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div class="sm:text-center lg:text-left">
								<h1 class="text-4xl tracking-tight font-extrabold text-green-impact sm:text-5xl md:text-7xl">
									<span class="block xl:inline chauncy">Welcome to the Knowledge Hut!</span>
								</h1>

								<p class="mt-6 text-green-impact sm:mt-5 text-base sm:max-w-xl sm:mx-auto lg:mx-0">
									We're almost at the end of our adventure…
								</p>
								<p class="mt-6 text-green-impact sm:mt-5 text-base sm:max-w-xl sm:mx-auto lg:mx-0">
									With all the new knowledge that you’ve acquired, are you ready for our final test?
								</p>
								<p class="mt-6 text-green-impact sm:mt-5 text-base sm:max-w-xl sm:mx-auto lg:mx-0">
									Enter the Knowledge Hut and find out how well you know the different ways migrant workers are protected in Singapore.
								</p>
								<p class="mt-6 text-green-impact sm:mt-5 text-xs sm:max-w-xl sm:mx-auto lg:mx-0">	
									*Only participants with a full score of 5/5 may proceed to take part in our Knowledge Hut giveaway.
								</p>
								<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div class="rounded-full shadow">
										<a href="./quiz" class="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-full text-gray-100 bg-green-impact md:py-2 md:text-lg md:px-10">
										Test Yourself
										</a>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img class="md:w-8/12 mx-auto mt-4" src="../assets/images/hut.png" alt="">
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		mounted() {
		},
		methods:{
			isMobile: function() {
				var check = false;
				(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
				return check;
			}
		}
	}
</script>

<style scoped>
</style>