<template>
	<div class="md:mt-24 mt-16">
		<section class="md:h-screen green">
			<div class="relative overflow-hidden md:h-screen">
				<div class="max-w-7xl mx-auto">
					<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-8 xl:mt-14">

							<div v-if="!completedQuiz" class="quizBox">
								<h3 class="font-bold text-2xl text-green-impact question">Q{{currentQuestion.id}}: {{currentQuestion.question}}</h3>

								<div class="mt-10 answers">
									
									<div class="rounded-full shadow" v-for="answer in currentQuestion.answers" :key="answer.answer">
										<p class="mt-6 w-full flex items-center justify-start px-8 py-1 border-4 border-green-impact text-base font-bold rounded-full text-gray-100 text-green-impact md:py-2 md:text-lg md:px-10 cursor-pointer hover:shadow-md stuff" v-on:click="handleAnswer(answer.correct)">
										{{answer.answer}}
										</p>
									</div>

								</div>
							</div>

							<div v-if="completedQuiz">
								<h3 class="font-bold text-6xl text-green-impact chauncy text-center">your final result is...</h3>

								<p class="text-9xl text-green-impact chauncy text-center mt-6">{{score}}/5</p>

								<div v-if="score!==5">
									<p class="text-xl text-green-impact mont text-center mt-4" v-if="score==4">
										Almost there! You were super close to completing your final task...
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4" v-if="score==3">
										So close - you're getting there!
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4" v-if="score==2">
										Not too bad!
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4" v-if="score==1">
										Don't worry, the greatest Adventurers are the ones who overcome the biggest obstacles. 
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4" v-if="score==0">
										Even the most difficult obstacles can be conquered with perseverance. Don’t give up and try again!
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4">
										Visit <a href="https://alandforall.com/journey" class="underline">Alfa's Journey</a> to refresh your knowledge before attempting the Knowledge Hut quiz again. Remember, you stand a chance to win attractive prizes when you score 5/5 on the Knowledge Hut, good luck Adventurer!
									</p>

									<p class="text-xl text-green-impact mont text-center mt-4">
										Refer to our <a href="https://www.instagram.com/p/CLETt3ZAjtH/" class="underline">Instagram post</a> for the full list of steps to take part in the giveaway.
									</p>

									<div class="rounded-full shadow mt-10">
										<a href="./hut" class="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-full text-gray-100 bg-green-impact md:py-2 md:text-lg md:px-10">
										Try Again
										</a>
									</div>
								</div>

								<div v-if="score===5">
									<p class="text-xl text-green-impact mont text-center mt-6">
										Congratulations! You’ve aced the Knowledge Hut! This qualifies you for one chance in our grand giveaway. Follow the steps <a href="https://www.instagram.com/p/CLETt3ZAjtH/" class="underline">here</a> to take part in the Knowledge Hut giveaway! <br>
										First Prize: Apple AirPods Pro x1 <br>
										Second Prize: Olympus Film Camera and Roll bundle x2 <br>
										Third Prize: Chope $30 Vouchers x7

									</p>

									<div>
										<div class="flex space-x-4 mt-6">
											<div class="flex-1 mt-1 flex shadow-sm rounded-3xl">
												<span class="font-bold inline-flex items-center px-3 rounded-l-3xl border-4 border-green-impact border-r-0 bg-gray-50 text-2xl text-green-impact mont">
													@
												</span>
												<input type="text" name="username" id="username" class="font-bold border-4 border-green-impact border-l-0 text-green-impact flex-1 block w-full px-3 py-2 rounded-r-3xl border-gray-300" placeholder="Instagram Username" v-model="username">
											</div>

											<div class="flex-1 mt-1 flex shadow-sm">
												<input type="text" name="phone" id="phone" class="font-bold border-4 border-green-impact text-green-impact flex-1 block w-full px-3 py-2 rounded-3xl" placeholder="Phone Number" v-model="phone">
											</div>
										</div>

										<div class="flex-1 mt-1 flex shadow-sm">
											<input type="email" name="email" id="email" class="font-bold border-4 border-green-impact text-green-impact flex-1 block w-full px-3 py-2 rounded-3xl" placeholder="Email Address" v-model="email">
										</div>
										

										<div class="flex items-center justify-center mt-4 mont">
											<input id="terms" name="terms" type="checkbox" class="h-4 w-4 rounded mont">
											<label for="terms" class="ml-2 block text-md text-green-impact mont text-center">
												<conditions/>
											</label>
										</div>
										<div class="rounded-full shadow mt-8">
											<a href="#" class="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-full text-gray-100 bg-green-impact md:py-2 md:text-lg md:px-10" v-on:click="addInstagram()">
											Submit
											</a>
										</div>
									</div>
								</div>
							</div>

						</main>
					</div>
				</div>
				<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img class="md:w-8/12 mx-auto mt-4" src="../assets/images/hut.png" alt="" v-if="score!=5">
					<img class="md:w-8/12 mx-auto" src="../assets/images/prizes.png" alt="" v-if="score==5">
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { db } from '../firebase';
	
	import conditions from './conditions.vue';
	export default {
		components : {
			conditions
		},
		mounted() {
			this.startDateTime = new Date();
			this.updateTries();
		},
		computed: {
			currentQuestion: function ()  {
				return this.getQuestionById(this.curr)
			},
			completedQuiz: function() {
				return (this.questions.length+1) === this.curr
			},
			instaCollection() {
				return db.collection('insta');
			},
			analytics() {
				return db.collection('analytics');
			},
		},
		data() {
      return {
				username: "",
				email: "",
				phone: "",
				curr: 1,
				score: 0,
				startDateTime: "",
				endDateTime: "",
        questions: [
					{
						id: 1,
						question: "Who should migrant workers approach if they are not given their full salary?",
						answers: [
							{correct: false, answer: "Singapore Police Force (SPF)"}, 
							{correct: true, answer: "Tripartite Alliance for Dispute Management (TADM)"},
						]
					},
					{
						id: 2,
						question: "What are the responsibilities of the Housing Inspectorate in MOM’s Foreign Manpower Management Division (FMMD)?",
						answers: [
							{correct: true, answer: "Investigate cases where migrant workers are staying in poor conditions"}, 
							{correct: false, answer: "Provide migrant workers with the necessary amenities and facilities in their dormitoriess"},
						]
					},
					{
						id: 3,
						question: "What can you do to make migrant workers feel at home?",
						answers: [
							{correct: false, answer: "Mind my own business"}, 
							{correct: true, answer: "Befriend them and listen to their stories"}, 
						]
					},
					{
						id: 4,
						question: "What should migrant workers do if the accommodation provided is overcrowded and poorly maintained?",
						answers: [
							{correct: true, answer: "Raise the issue to their employers so that improvements can be made "}, 
							{correct: false, answer: "Call the police to lodge a complaint"},
						]
					},
					{
						id: 5,
						question: "How is food hygiene taken care of to ensure the health of migrant workers?",
						answers: [
							{correct: false, answer: "Frequent taste tests are conducted to suit the workers' palates"}, 
							{correct: true, answer: "All products are obtained from licensed food sources"},
						]
					},
        ]
      };
    },
		watch: {
			completedQuiz: function () {
				if (this.completedQuiz == true) {
					this.endDateTime = new Date();
					this.updateTries();
				}
			}
		},
		methods: {
			async addInstagram() {
				await this.instaCollection.doc(this.username).set({
					username: this.username,
					email: this.email,
					phone: this.phone
				}).then(
					window.location.replace("./thank")
				);
      },
      async updateTries() {
				// we will just record everything to a uuid and the anonymized result 
				await this.analytics.add({
					score: this.score,
					start: this.startDateTime,
					end: this.endDateTime
				})
      },
			getQuestionById(id) {
				return this.questions.filter(question => {
					return question.id === id
        })[0]
			},
			handleAnswer(scoreCheck) {
				if (!this.completedQuiz) {
					this.curr += 1
					if (scoreCheck) this.score += 1
				}
			}
		}
	}
</script>

<style>
.stuff {
	transition: 0.3s
}
.shadow-xl {
	--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.question {
  grid-area: question;
}
.answers {
  grid-area: answers;
}
.quizBox {
	display: grid;
	height: 18rem;
	grid-template-rows: 50% 50%;
	grid-template-areas: 
    "question"
    "answers"
}
</style>