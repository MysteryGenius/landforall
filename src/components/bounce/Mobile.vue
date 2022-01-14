<template>
	<div>
		<section id="sectionBlue" class="overflow-hidden relative h-screen" v-bind:class="{ blue: blueActive, pink: pinkActive, orange: orangeActive }">
			<img ref="speech1" id="speech1" src="../../assets/images/speech-1.png" class="object-center absolute inset-x-0 mx-auto mt-64 l-64">
			<img ref="hospital" id="hospital" src="../../assets/images/hospital.png" class="object-center absolute inset-x-0 mx-auto mt-64 l-64">
			<img ref="bushLeft" id="bushLeft" src="../../assets/images/bushLeft.png" class="object-center absolute inset-x-0 mx-auto mt-full l-64 w-32">
			<img ref="bushRight" id="bushRight" src="../../assets/images/bushRight.png" class="object-center absolute inset-x-0 mx-auto mt-full l-64 w-32">
			<img ref="ambulance" id="ambulance" src="../../assets/images/ambulance.png" class="absolute mt-full left-44">
			<img ref="scrolldown" id="scrolldown" src="../../assets/images/scroll-down.png" class="absolute mt-screen left-2 w-1/2">

			<img ref="bed" id="bed"  src="../../assets/images/bed.png" class="object-center absolute inset-x-0 mx-auto mt-full -left-20">
			<img ref="drip" id="drip"  src="../../assets/images/drip.png" class="object-center absolute inset-x-0 mx-auto mt-96 w-1/3 left-72">
			<img ref="alfa1" id="alfa1" src="../../assets/images/alfa-1.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-5/6">
			<img ref="speech2" id="speech2" src="../../assets/images/speech-2.png" class="object-center absolute inset-x-0 mx-auto mt-44 w-5/6">
			
			<img ref="bill" id="bill" src="../../assets/images/bill.png" class="absolute mx-auto mt-96 w-2/3">
			<img ref="speech3" id="speech3" src="../../assets/images/speech-3.png" class="object-center absolute inset-x-0 mx-auto mt-24 w-2/3">
			<img ref="alfa2" id="alfa2" src="../../assets/images/alfa-2.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-5/6">
 
			<img ref="bunk" id="bunk" src="../../assets/images/bunk.png" class="object-center absolute mx-auto mt-full left-44">
			<img ref="speech4" id="speech4" src="../../assets/images/speech-4.png" class="object-center absolute inset-x-0 mx-auto mt-24 w-2/3">
			<img ref="alfa3" id="alfa3" src="../../assets/images/alfa-3.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-5/6">

			<img ref="speech5" id="speech5" src="../../assets/images/speech-5.png" class="object-center absolute inset-x-0 mx-auto mt-24 w-5/6">
			<img ref="bubble" id="bubble" src="../../assets/images/bubble.png" class="object-center absolute mx-auto mt-96 left-56 w-1/3">
			<img ref="picture" id="picture" src="../../assets/images/picture.png" class="object-center absolute inset-x-0 mx-auto w-44">
			<img ref="alfa4" id="alfa4" src="../../assets/images/alfa-4.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-5/6">

			<img ref="counsellor" id="counsellor" src="../../assets/images/counsellor.png" class="object-center absolute inset-x-0 mx-auto mt-full w-1/3 -left-64">
			<img ref="speech6" id="speech6" src="../../assets/images/speech-6.png" class="object-center absolute inset-x-0 mx-auto w-5/6 mt-32">
			<img ref="speech7" id="speech7" src="../../assets/images/speech-7.png" class="object-center absolute inset-x-0 mx-auto w-5/6 mt-20">
			<img ref="phone" id="phone" src="../../assets/images/phone.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-2/3">

			<img ref="message1" id="message1" src="../../assets/images/message1.png" class="object-center absolute inset-x-0 mx-auto w-1/2 mt-80 message">
			<img ref="message2" id="message2" src="../../assets/images/message2.png" class="object-center absolute inset-x-0 mx-auto w-1/2 mt-80 message">
			<img ref="message3" id="message3" src="../../assets/images/message3.png" class="object-center absolute inset-x-0 mx-auto w-1/2 mt-80 message">

			<img ref="alfa5" id="alfa5" src="../../assets/images/alfa-5.png" class="object-center absolute inset-x-0 mx-auto mt-80 w-5/6">

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
				ambulance, hospital, bushLeft, bushRight, bed, drip, bill, bunk, bubble, picture, counsellor, phone, scrolldown 
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
					anticipatePin: true,
					scrub: true,
					pin: "#sectionBlue",
				}
			})
			.to(
				speech1,
				1.5,
				{ opacity: "0"},
				"-=1.5"
			)
			.to(
				scrolldown,
				1.5,
				{ x: "-200%"},
				"-=1.5"
			)
			.fromTo(
				hospital,
				1.5,
				{ x: "-300%"},
				{ x: "-10%"},
				"-=1.5"
			)
			.fromTo(
				bushLeft,
				1.5,
				{ x: "-300%"},
				{ x: "-140%"},
				"-=1.5"
			)
			.fromTo(
				bushRight,
				1.5,
				{ x: "-400%"},
				{ x: "100%"},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				ambulance,
				1.5,
				{ opacity: "0", x: "100%"}
			)
			.to(
				hospital,
				1.5,
				{ opacity: "0", y: "-200"},
				"-=1.5"
			)
			.to(
				bushLeft,
				1.5,
				{ opacity: "0", x: "-200%"},
				"-=1.5"
			)
			.to(
				bushRight,
				1.5,
				{ opacity: "0", x: "-200%"},
				"-=1.5"
			)
			.from(
				bed,
				1.5,
				{ y: "300%"},
				"-=1.5"
			)
			.from(
				drip,
				1.5,
				{ y: "300%"},
				"-=1.5"
			)
			.from(
				speech2,
				1.5,
				{ y: "400%"},
				"-=1.5"
			)
			.from(
				alfa1,
				1.5,
				{ y: "300%"},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa1,
				1.5,	
				{ opacity: "0"},
			)
			.fromTo(
				bill,
				1.5,
				{ y: "300%"},
				{ y: "0%", onComplete: this.toPink, onReverseComplete: this.toBlue},
				"-=1.5"
			)
			.fromTo(
				alfa2,
				1.5,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=1.5"
			)
			.to(
				bed,
				1.5,	
				{ y: "-420%", opacity: "0"},
				"-=1.5"
			)
			.to(
				speech2,
				1.5,	
				{ y: "-900%", opacity: "0"},
				"-=1.5"
			)
			.to(
				drip,
				1.5,	
				{ y: "-600%", opacity: "0"},
				"-=1.5"
			)
			.from(
				speech3,
				1.5,
				{ y: "400%"},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa2,
				1.5,	
				{ opacity: "0"},
			)
			.to(
				speech3,
				1.5,	
				{ y: "-200%", opacity: "0"},
				"-=1.5"
			)
			.to(
				bill,
				1.5,	
				{ y: "-300%", opacity: "0"},
				"-=1.5"
			)
			.from(
				bunk,
				1.5,
				{ y: "300%"},
				"-=1.5"
			)
			.fromTo(
				alfa3,
				1.5,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=1.5"
			)
			.from(
				speech4,
				1.5,
				{ y: "300%"},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				alfa3,
				1.5,	
				{ opacity: "0"},
			)
			.fromTo(
				alfa4,
				1.5,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=1.5"
			)
			.to(
				speech4,
				1.5,	
				{ y: "-300%", opacity: "0"},
				"-=1.5"
			)
			.from(
				speech5,
				1.5,
				{ y: "600%"},
				"-=1.5"
			)
			.fromTo(
				bubble,
				1.5,	
				{ scaleX:0.2, scaleY:0.2, opacity: 0, x: "-80%"},
				{ scaleX: 1, scaleY: 1, opacity: 1, x: "0%"},
				"-=1.5"
			)
			.fromTo(
				picture,
				1.5,
				{ y: "-4400%", x: "200%", opacity: 0},
				{ y: "-4586%", opacity: 1, rotation:10},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				picture,
				1.5,	
				{ x: "500%", y: "-5000%", opacity: "0"},
			)
			.to(
				bubble,
				1.5,	
				{ y: "-300%", opacity: "0"},
				"-=1.5"
			)
			.to(
				speech5,
				1.5,	
				{ y: "-100%", opacity: "0"},
				"-=1.5"
			)
			.to(
				alfa4,
				1.5,	
				{ opacity: "0"},
				"-=1.5"
			)
			.fromTo(
				alfa5,
				1.5,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=1.5"
			)
			.fromTo(
				counsellor,
				1.5,
				{ opacity: "0"},
				{ opacity: "1"},
				"-=1.5"
			)
			.from(
				speech6,
				1.5,
				{ x: "300%"},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				counsellor,
				1.5,
				{ opacity: "0"},
			)
			.to(
				speech6,
				1,
				{ opacity: "0"},
				"-=1.5"
			)
			.fromTo(
				speech7,
				1.5,
				{ y: "300%", opacity: 0},
				{ y: "0%", opacity: 1},
				"-=1.5"
			)
			.to({}, {duration: 1.4})
			.to(
				speech7,
				1.5,
				{ opacity: "0"},
			)
			.fromTo(
				phone,
				1.5,
				{ y: "30%", x: "0%", rotation: 180, opacity: 0, scaleX:0, scaleY:0,},
				{ y: "-60%", x: "30%", rotation: -10, opacity: 1, scaleX: 1, scaleY: 1},
			)
			.from(
				".message",
				1,
				{ opacity: 0},
			)
			.to(
				message1,
				1.5,
				{ y: "-284%", x: "27%", rotation: -10, opacity: 0},
				"-=1.5"
			)
			.to(
				message2,
				1.5,
				{ y: "-134%", x: "36%", rotation: -10, opacity: 0},
				"-=1.5"
			)
			.to(
				message3,
				1.5,
				{ y: "-30%", x: "46%", rotation: -10, opacity: 0},
				"-=1.5"
			)
			.to(
				".message",
				1,
				{ opacity: 1, stagger: 1, ease: "power4"},
			)
			.to(
				".message",
				1,
				{ opacity: 0, y: "-1000%", onComplete: this.toOrange, onReverseComplete: this.toPink},
			)
			.to(
				alfa5,
				1,
				{ y: "0%"},
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
			}

		}
	}
</script>

<style scoped>
.h-screen {
	height: 140vh;
}
.mt-full {
	margin-top: 28rem;
}
.mt-screen {
	margin-top: 42rem;
}
</style>