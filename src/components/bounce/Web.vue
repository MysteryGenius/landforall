<template>
	<div>
		<section id="sectionBlue" class="overflow-hidden relative h-screen" v-bind:class="{ blue: blueActive, pink: pinkActive, orange: orangeActive }">
			<img ref="speech1" id="speech1" src="../../assets/images/speech-1.png" class="object-center absolute inset-x-0 mx-auto w-1/2 mt-64 l-64">
			<img ref="hospital" id="hospital" src="../../assets/images/hospital.png" class="object-center absolute inset-x-0 mx-auto mt-44 l-64 w-1/2">
			<img ref="bushLeft" id="bushLeft" src="../../assets/images/bushLeft.png" class="object-center absolute inset-x-0 mx-auto mt-full w-2/6">
			<img ref="bushRight" id="bushRight" src="../../assets/images/bushRight.png" class="object-center absolute inset-x-0 mx-auto mt-full w-1/6">
			<img ref="ambulance" id="ambulance" src="../../assets/images/ambulance.png" class="object-center absolute inset-x-0 mx-auto mt-full w-1/3">
			<img ref="scrolldown" id="scrolldown" src="../../assets/images/scroll-down.png" class="object-center absolute inset-x-0 mt-screen ml-8 w-1/6">

			<img ref="bed" id="bed"  src="../../assets/images/bed.png" class="object-center absolute inset-x-0 mx-auto mt-96 w-1/3">
			<img ref="drip" id="drip"  src="../../assets/images/drip.png" class="object-center absolute inset-x-0 mx-auto mt-96 w-1/12">
			<img ref="alfa1" id="alfa1" src="../../assets/images/alfa-1.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/2 w-1/3">
			<img ref="speech2" id="speech2" src="../../assets/images/speech-2.png" class="object-center absolute inset-x-0 mx-auto mt-52 w-1/3">
			
			<img ref="bill" id="bill" src="../../assets/images/bill.png" class="object-center absolute inset-x-0 mx-auto mt-72 w-1/4">
			<img ref="alfa2" id="alfa2" src="../../assets/images/alfa-2.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/2 w-1/3">
			<img ref="speech3" id="speech3" src="../../assets/images/speech-3.png" class="object-center absolute inset-x-0 mx-auto mt-48 w-1/3">

			<img ref="bunk" id="bunk" src="../../assets/images/bunk.png" class="object-center absolute inset-x-0 mx-auto w-2/3 mt-60 left-60">
			<img ref="alfa3" id="alfa3" src="../../assets/images/alfa-3.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/2 w-1/3">
			<img ref="speech4" id="speech4" src="../../assets/images/speech-4.png" class="object-center absolute inset-x-0 mx-auto mt-40 w-1/3">

			<img ref="alfa4" id="alfa4" src="../../assets/images/alfa-4.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/2 w-1/3">
			<img ref="speech5" id="speech5" src="../../assets/images/speech-5.png" class="object-center absolute inset-x-0 mx-auto mt-40 w-1/3">
			<img ref="bubble" id="bubble" src="../../assets/images/bubble.png" class="object-center absolute inset-x-0 mx-auto mt-64 left-20 w-1/3">

			<img ref="alfa5" id="alfa5" src="../../assets/images/alfa-5.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/2 w-1/3">
			<img ref="counsellor" id="counsellor" src="../../assets/images/counsellor.png" class="object-center absolute inset-x-0 mx-auto mt-72 w-1/2 w-1/6">
			<img ref="speech6" id="speech6" src="../../assets/images/speech-6.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/3">

			<img ref="phone" id="phone" src="../../assets/images/phone.png" class="object-center absolute inset-x-0 mx-auto w-1/4">
			<img ref="message1" id="message1" src="../../assets/images/message1.png" class="object-center absolute inset-x-0 mx-auto w-1/6 message">
			<img ref="message2" id="message2" src="../../assets/images/message2.png" class="object-center absolute inset-x-0 mx-auto w-1/6 message">
			<img ref="message3" id="message3" src="../../assets/images/message3.png" class="object-center absolute inset-x-0 mx-auto w-1/6 message">
			<img ref="speech7" id="speech7" src="../../assets/images/speech-7.png" class="object-center absolute inset-x-0 mx-auto mt-60 w-1/3">


		</section>
	</div>
</template>

<script>
	import { gsap } from 'gsap';
	import { mapActions } from 'vuex';
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	export default {
		mounted() {
			window.scrollTo(0, 0)
			const { 
				speech1, speech2, speech3, speech4, speech5, speech6, speech7, 
				alfa1, alfa2, alfa3, alfa4, alfa5, 
				message1, message2, message3,
				ambulance, hospital, bushLeft, bushRight, bed, drip, bill, bunk, bubble, counsellor, phone, scrolldown
			} = this.$refs;

			gsap.timeline( {repeat:-1, yoyo:true} )
			.from(
				scrolldown,
				0.6,
				{ opacity: "0.6", y: "-30%", ease: "power3.out"},
			)
			
			gsap.timeline({
				scrollTrigger: {
					scrollTrigger: "#sectionBlue",
					start: "top top",
					end: "+=" + (window.innerHeight * 20),
					scrub: 0.8,
					pin: "#sectionBlue",
					anticipatePin: true,
				}
			})
			.fromTo(
				ambulance,
				3,
				{ x: "300%"},
				{ x: "100%"}
			)
			.to(
				scrolldown,
				3,
				{ x: "-300%"},
				"-=3"
			)
			.to(
				speech1,
				3,
				{ opacity: "0"},
				"-=3"
			)
			.fromTo(
				hospital,
				3,
				{ x: "-300%"},
				{ x: "-10%"},
				"-=3"
			)
			.fromTo(
				bushLeft,
				3,
				{ x: "-300%"},
				{ x: "-100%"},
				"-=3"
			)
			.fromTo(
				bushRight,
				3,
				{ x: "-400%", y: "60%"},
				{ x: "100%"},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				ambulance,
				3,
				{ opacity: "0", x: "300%"}
			)
			.to(
				hospital,
				3,
				{ opacity: "0", y: "-200"},
				"-=3"
			)
			.to(
				bushLeft,
				3,
				{ opacity: "0", x: "-300%"},
				"-=3"
			)
			.to(
				bushRight,
				3,
				{ opacity: "0", x: "-300%"},
				"-=3"
			)
			.fromTo(
				bed,
				3,
				{ x: "20%", y: "600%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				drip,
				3,
				{ y: "600%", x: "360%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				speech2,
				3,
				{ y: "600%", x: "-80%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				alfa1,
				3,
				{ y: "600%"},
				{ y: "0%"},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa1,
				3,	
				{ opacity: "0"},
			)
			.fromTo(
				bill,
				3,
				{ y: "600%", x: "-100%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				alfa2,
				3,
				{ opacity: "0"},
				{ opacity: "1", onStart: this.toPink, onReverseComplete: this.toBlue},
				"-=3"
			)
			.to(
				bed,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.to(
				speech2,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.to(
				drip,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.fromTo(
				speech3,
				3,
				{ y: "600%", x: "100%"},
				{ y: "0%"},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa2,
				3,	
				{ opacity: "0"},
			)
			.to(
				speech3,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.to(
				bill,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.fromTo(
				bunk,
				3,
				{ y: "600%", x: "40%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				alfa3,
				3,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=3"
			)
			.fromTo(
				speech4,
				3,
				{ y: "600%", x: "-100%"},
				{ y: "0%"},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa3,
				3,	
				{ opacity: "0"},
			)
			.fromTo(
				alfa4,
				3,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=3"
			)
			.to(
				speech4,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.fromTo(
				speech5,
				3,
				{ y: "600%", x: "-100%"},
				{ y: "0%"},
				"-=3"
			)
			.fromTo(
				bubble,
				3,	
				{ y: "-0%", x: "0%", scaleX:0.2, scaleY:0.2, opacity: 0},
				{ scaleX: 1, scaleY: 1, x: "60%", opacity: 1},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				bubble,
				3,	
				{ x: "200%", y: "-200%", opacity: "0"},
			)
			.to(
				speech5,
				3,	
				{ y: "-200%", opacity: "0"},
				"-=3"
			)
			.to(
				alfa4,
				3,	
				{ opacity: "0"},
				"-=3"
			)
			.fromTo(
				alfa5,
				3,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=3"
			)
			.fromTo(
				counsellor,
				3,
				{ y: "600%", x: "-100%", opacity: "0"},
				{ opacity: "1", y: "0%"},
				"-=3"
			)
			.fromTo(
				speech6,
				3,
				{ y: "600%", x: "80%"},
				{ y: "0%"},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				counsellor,
				3,
				{ y: "-300%", opacity: "0"},
			)
			.to(
				speech6,
				1,
				{ opacity: "0"},
				"-=3"
			)
			.fromTo(
				phone,
				3,
				{ y: "40%", x: "30%", rotation: 180, opacity: 0, scaleX:0, scaleY:0,},
				{ y: "20%", x: "70%", rotation: 0, opacity: 1, scaleX: 1, scaleY: 1},
				"-=3"
			)
			.fromTo(
				message1,
				3,
				{ y: "180%", x: "106%", opacity: 0},
				{ y: "180%", opacity: 0},
				"-=3"
			)
			.fromTo(
				message2,
				3,
				{ y: "220%", x: "106%", opacity: 0},
				{ y: "220%", opacity: 0},
				"-=3"
			)
			.fromTo(
				message3,
				3,
				{ y: "330%", x: "106%", opacity: 0},
				{ y: "330%", opacity: 0},
				"-=3"
			)
			.fromTo(
				speech7,
				3,
				{ y: "600%", x: "-100%", opacity: 0},
				{ y: "0%", opacity: 1},
				"-=3"
			)
			.to({}, {duration: 1.4})
			.to(
				".message",
				1,
				{ opacity: 1, stagger: 1, ease: "power4"},
			)
			.to(
				".message",
				1,
				{ opacity: 0, y: "-600%", onStart: this.toOrange, onReverseComplete: this.toPink},
			)
			.to(
				speech7,
				1,
				{ opacity: "0", y: "-300%"},
				"-=1"
			)
			.to(
				alfa5,
				1,
				{ y: "0%", pin: true},
				"-=1"
			)
			.to(
				phone,
				1,
				{ opacity: "0", y: "-300%",},
				"-=1"
			)
			.to(
				bunk,
				1,
				{ opacity: "0", y: "-300%"},
				"-=1"
			)
		},
		data() {
      return {
        blueActive: true,
        pinkActive: false,
        orangeActive: false,
      };
    },
		methods: {
			...mapActions([
				'setBlue', 'setPink', 'setOrange'
			]),
			toBlue() {
				this.setBlue()
				this.blueActive = true
				this.pinkActive = false
				this.orangeActive = false
			},

			toPink() {
				this.setPink()
				this.blueActive = false
				this.pinkActive = true
				this.orangeActive = false
			},

			toOrange() {
				this.setOrange()
				this.blueActive = false
				this.pinkActive = false
				this.orangeActive = true
			},

			bounceScroll() {

			}

		}
	}
</script>

<style scoped>
.h-screen {
	height: 150vh;
}
.mt-full {
	margin-top: 28rem;
}
.mt-screen {
	margin-top: 42rem;
}
</style>