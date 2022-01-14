<template>
	<div class="md:mt-24 mt-16 yellow">
		<div class="h-screen relative overflow-hidden">
			<div v-bind:class="{ 'invisible': checkSelected() && forceHide }">
				<h3 class="chauncy text-4xl text-yellow-impact text-center mt-4">Welcome to Alfa's Journey</h3>
				<p class="mont mt-4 text-yellow-impact text-center">
					Click on any of the checkpoints to experience the ups and downs Alfa encountered on his adventure!
				</p>
			</div>
			<img ref="coreMap" id="coreMap" src="../assets/journey/map-9.png" class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables">
			<img ref="alfa1" id="alfa1" src="../assets/journey/alfa-1.png"
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=1 }">
			<img ref="alfa2" id="alfa2" src="../assets/journey/alfa-2.png"
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=2 }">
			<img ref="alfa3" id="alfa3" src="../assets/journey/alfa-3.png" v-if="unlocked3" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=3 }">
			<img ref="alfa3hover" src="../assets/journey/hover-3.png" v-if="!unlocked3"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=3 }">
			<img ref="alfa4" id="alfa4" src="../assets/journey/alfa-4.png" v-if="unlocked4" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=4 }">
			<img ref="alfa4hover" src="../assets/journey/hover-4.png" v-if="!unlocked4"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=4 }">
			<img ref="alfa5" id="alfa5" src="../assets/journey/alfa-5.png" v-if="unlocked5" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=5 }">
			<img ref="alfa5hover" src="../assets/journey/hover-5.png" v-if="!unlocked5"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=5 }">
			<img ref="alfa6" id="alfa6" src="../assets/journey/alfa-6.png" v-if="unlocked6" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=6 }">
			<img ref="alfa6hover" src="../assets/journey/hover-6.png" v-if="!unlocked6"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=6 }">
			<img ref="alfa7" id="alfa7" src="../assets/journey/alfa-7.png" v-if="unlocked7" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=7 }">
			<img ref="alfa7hover" src="../assets/journey/hover-7.png" v-if="!unlocked7"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=7 }">
			<img ref="alfa8" id="alfa8" src="../assets/journey/alfa-8.png" v-if="unlocked8" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=8 }">
			<img ref="alfa8hover" src="../assets/journey/hover-8.png" v-if="!unlocked8"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=8 }">
			<img ref="alfa9" id="alfa9" src="../assets/journey/alfa-9.png" v-if="unlocked9" 
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=9 }">
			<img ref="alfa9hover" src="../assets/journey/hover-9.png" v-if="!unlocked9"  
				class="absolute mt-0 md:-mt-24 md:left-1/4 left-0 w-full md:w-2/3 lg:w-1/2 mx-auto movables" v-bind:class="{ 'invisible': selected!=9 }">
			<div class="absolute left-0 top-0 h-screen w-full" v-on:click="toCore()" v-if="selected>0"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="third" v-if="selected==-1 && !unlocked3" v-on:click="toThirdHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="forth" v-if="selected==-1 && !unlocked4" v-on:click="toForthHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="fifth" v-if="selected==-1 && !unlocked5" v-on:click="toFifthHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="sixth" v-if="selected==-1 && !unlocked6" v-on:click="toSixthHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="seventh" v-if="selected==-1 && !unlocked7" v-on:click="toSeventhHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="eighth" v-if="selected==-1 && !unlocked8" v-on:click="toEighthHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="ninth" v-if="selected==-1 && !unlocked9" v-on:click="toNinthHover()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="first" v-if="selected==-1" v-on:click="toFirst()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="second" v-if="selected==-1" v-on:click="toSecond()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="third" v-if="selected==-1 && unlocked3" v-on:click="toThird()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="forth" v-if="selected==-1 && unlocked4" v-on:click="toForth()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="fifth" v-if="selected==-1 && unlocked5" v-on:click="toFifth()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="sixth" v-if="selected==-1 && unlocked6" v-on:click="toSixth()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="seventh" v-if="selected==-1 && unlocked7" v-on:click="toSeventh()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="eighth" v-if="selected==-1 && unlocked8" v-on:click="toEighth()"></div>
			<div class="absolute h-20 w-28 md:h-28 md:w-30 cursor-pointer" id="ninth" v-if="selected==-1 && unlocked9" v-on:click="toNinth()"></div>
			<first v-if="selected==1"/>
			<second v-if="selected==2"/>
			<third v-if="selected==3 && unlocked3"/>
			<forth v-if="selected==4 && unlocked4"/>
			<fifth v-if="selected==5 && unlocked5"/>
			<sixth v-if="selected==6 && unlocked6"/>
			<seventh v-if="selected==7 && unlocked7"/>
			<eighth v-if="selected==8 && unlocked8"/>
			<ninth v-if="selected==9 && unlocked9"/>

		</div>
	</div>
</template>

<script>
	import { gsap } from 'gsap';
	import first from './journey/first.vue';
	import second from './journey/second.vue';
	import third from './journey/third.vue';
	import forth from './journey/forth.vue';
	import fifth from './journey/fifth.vue';
	import sixth from './journey/sixth.vue';
	import seventh from './journey/seventh.vue';
	import eighth from './journey/eighth.vue';
	import ninth from './journey/ninth.vue';
	export default {
		components : {
			first, 
			second, 
			third, 
			forth, 
			fifth, 
			sixth, 
			seventh, 
			eighth, 
			ninth
		},
		data() {
			return {
				selected: -1,
				forceHide: true,
				unlocked3: true,
				unlocked4: true,
				unlocked5: true,
				unlocked6: true,
				unlocked7: true,
				unlocked8: true,
				unlocked9: true,
			};
		},
		methods: {
			toFirst() {
				this.selected = 1
				const { coreMap, alfa1 } = this.$refs;
				gsap.to(
					[coreMap, alfa1], 
					0.4,
					{ ease: "power3.easeOut", x: "-50%", y: "-50%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toSecond() {
				this.selected = 2
				const { coreMap, alfa2 } = this.$refs;
				gsap.to(
					[coreMap, alfa2], 
					0.4,
					{ ease: "power3.easeOut", x: "70%", y: "-20%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toThird() {
				this.selected = 3
				const { coreMap, alfa3 } = this.$refs;
				gsap.to(
					[coreMap, alfa3], 
					0.4,
					{ ease: "power3.easeOut", x: "50%", y: "0%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toForth() {
				this.selected = 4
				const { coreMap, alfa4 } = this.$refs;
				gsap.to(
					[coreMap, alfa4], 
					0.4,
					{ ease: "power3.easeOut", x: "-50%", y: "-20%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toFifth() {
				this.selected = 5
				const { coreMap, alfa5 } = this.$refs;
				gsap.to(
					[coreMap, alfa5], 
					0.4,
					{ ease: "power3.easeOut", x: "-80%", y: "-30%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toSixth() {
				this.selected = 6
				const { coreMap, alfa6 } = this.$refs;
				gsap.to(
					[coreMap, alfa6], 
					0.4,
					{ ease: "power3.easeOut", x: "-50%", y: "0%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toSeventh() {
				this.selected = 7
				const { coreMap, alfa7 } = this.$refs;
				gsap.to(
					[coreMap, alfa7], 
					0.4,
					{ ease: "power3.easeOut", x: "-50%", y: "30%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toEighth() {
				this.selected = 8
				const { coreMap, alfa8 } = this.$refs;
				gsap.to(
					[coreMap, alfa8], 
					0.4,
					{ ease: "power3.easeOut", x: "40%", y: "40%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toNinth() {
				this.selected = 9
				const { coreMap, alfa9 } = this.$refs;
				gsap.to(
					[coreMap, alfa9], 
					0.4,
					{ ease: "power3.easeOut", x: "70%", y: "40%", scaleX:1.6, scaleY:1.6,},
				);
			},
			toCore() {
				this.unlocked = false
				this.selected = -1
				this.forceHide = true
				gsap.to(
					".movables", 
					0.4,
					{ ease: "power3.easeOut", x: "0%", y: "0%", scaleX:1, scaleY:1,},
				);
			},
			toThirdHover() {
				this.selected = 3
				this.forceHide = false
				const { alfa3hover } = this.$refs;
				gsap.from(
					[alfa3hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toForthHover() {
				this.selected = 4
				this.forceHide = false
				const { alfa4hover } = this.$refs;
				gsap.from(
					[alfa4hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toFifthHover() {
				this.selected = 5
				this.forceHide = false
				const { alfa5hover } = this.$refs;
				gsap.from(
					[alfa5hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toSixthHover() {
				this.selected = 6
				this.forceHide = false
				const { alfa6hover } = this.$refs;
				gsap.from(
					[alfa6hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toSeventhHover() {
				this.selected = 7
				this.forceHide = false
				const { alfa7hover } = this.$refs;
				gsap.from(
					[alfa7hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toEighthHover() {
				this.selected = 8
				this.forceHide = false
				const { alfa8hover } = this.$refs;
				gsap.from(
					[alfa8hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			toNinthHover() {
				this.selected = 9
				this.forceHide = false
				const { alfa9hover } = this.$refs;
				gsap.from(
					[alfa9hover], 
					0.4,
					{ ease: "power3.easeOut", opacity:0},
				);
			},
			checkSelected() {
				return this.selected>0
			},
		}
	}
</script>


<style scoped>
	.map {
		background-image: url("../assets/journey/map-1.png")
	}
	#first {
		top: 60%;
		left: 50%;
	}
	#second {
		top: 48%;
		left: 32%;
	}
	#third {
		top: 37%;
		left: 35%;
	}
	#forth {
		top: 50%;
		left: 54%;
	}
	#fifth {
		top: 55%;
		left: 62%;
	}
	#sixth {
		top: 38%;
		left: 56%;
	}
	#seventh {
		top: 28%;
		left: 54%;
	}
	#eighth {
		top: 16%;
		left: 43%;
	}
	#ninth {
		top: 24%;
		left: 30%;
	}
	.h-screen {
		height: 120vh;
	}
	@media only screen and (max-width: 1440px) {
		/* For mobile phones: */
		#first {
			top: 56%;
			left: 50%;
		}
		#second {
			top: 46%;
			left: 32%;
		}
		#third {
			top: 36%;
			left: 35%;
		}
		#forth {
			top: 46%;
			left: 53%;
		}
		#fifth {
			top: 50%;
			left: 62%;
		}
		#sixth {
			top: 36%;
			left: 56%;
		}
		#seventh {
			top: 26%;
			left: 54%;
		}
		#eighth {
			top: 16%;
			left: 42%;
		}
		#ninth {
			top: 24%;
			left: 30%;
		}
		.h-screen {
			height: 100vh;
		}
	}
	@media only screen and (max-width: 768px) {
		/* For mobile phones: */
		#first {
			top: 36%;
			left: 45%;
		}
		#second {
			top: 30%;
			left: 8%;
		}
		#third {
			top: 24%;
			left: 14%;
		}
		#forth {
			top: 30%;
			left: 50%;
		}
		#fifth {
			top: 32%;
			left: 72%;
		}
		#sixth {
			top: 25%;
			left: 60%;
		}
		#seventh {
			top: 21%;
			left: 54%;
		}
		#eighth {
			top: 14%;
			left: 30%;
		}
		#ninth {
			top: 18%;
			left: 0%;
		}
		.h-screen {
			height: 140vh;
		}
	}
</style>