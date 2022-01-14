<template>
	<transition name="fade">
		<div class="absolute md:top-0 md:left-1/2 left-4 rounded-2xl border-8 border-pink-journey bg-pink-journey shadow md:w-1/2 w-11/12 p-4 my-10 -ml-0 md:-ml-10 h-2/3 overflow-y-auto scrollable md:mt-10 mt-40">
			<!-- Dead template -->
			<div class="md:flex md:space-x-10">
				<div class="flex-1">
					<h3 class="chauncy text-4xl text-pink-journey text-left">Checkpoint 1</h3>

					<p class="mont mt-4 text-pink-journey">
						Migrant workers face many challenges when they leave their hometown to work and support their families back home. One of the most prominent challenges they face is issues with their salary. It is important for them to get paid on time, and the authorities ensure this by <a class= "hover:font-black font-bold mont underline" href="https://www.straitstimes.com/singapore/mom-will-take-up-issue-with-employers-if-workers-are-not-paid-minister">stepping in to monitor and investigate cases of unpaid or underpaid migrant workers.</a>.
					</p>
				</div>
				<div class="flex-1">
					<embedo :toEmbed="'https://www.instagram.com/p/CKQz4K2hSlY/?igshid=1nhytd4u9xrwx'"/>
				</div>

			</div>

			<div class="my-6 space-y-4">
				<h4 class="font-bold mont text-pink-journey">Here are the policies that protect our migrant workers from any pay-related hurdles that they might face:</h4>

				<h5 class="font-bold mont text-pink-journey">1. In-Principle Approval (IPA) Declaration Letter</h5>
				<p class="text-pink-journey">
					MOM requires employers to issue their migrant workers with the IPA declaration letter before they depart their home countries for Singapore. Workers are able to see, both in English and their native language, the salary amount that employers had declared to MOM in their applications. Workers who find that they are underpaid or have their salaries reduced without their agreement should approach MOM or the Tripartite Alliance for Dispute Management for help.
				</p>

				<h5 class="font-bold mont text-pink-journey">2. Key Employment Terms (KETs) and itemised payslips</h5>
				<p class="text-pink-journey">
					Migrant workers are also entitled to receive their KETs and itemised payslips in writing, to help them understand their employment terms and benefits, and how their salary components are calculated. With these documents, misunderstandings and disputes at the workplace could be prevented.
				</p>

				<h5 class="font-bold mont text-pink-journey">3. Timely salary payment</h5>
				<p class="text-pink-journey">
					Under the Employment Act, workers need to be paid once every month, and within 7 days after the end of the salary period. If they do not receive their salary on time, they should approach their employer to find out if there are reasons for the late payment, and whether the regular payment schedule can be resumed. Otherwise, they can approach TADM for assistance. 
					In the first 6 months of 2020, there were 3.96 salary claims lodged per 1,000 foreign employees, down from 4.45 in 2018 and 4.98 in 2019.
 
				</p>

				<h5 class="font-bold mont text-pink-journey">4. Tripartite Alliance for Dispute Management (TADM)</h5>
				<p class="text-pink-journey">
					TADM was established by the Ministry of Manpower (MOM), National Trades Union Congress (NTUC), and Singapore National Employers Federation (SNEF), as a centre for both migrant and local workers to turn to for help regarding salary or employment disputes, especially if they are paid late or not paid at all. 
				</p>
			</div>

			<div>
				<h4 class="font-bold mont text-pink-journey">Learn more about how MOM safeguards our migrant workers’ livelihoods here:</h4>
				<div class="my-6 text-xs text-pink-journey space-y-6">
					<p>
						<a class= "hover:font-black font-bold mont underline mt-4" href="https://www.tal.sg/tadm/">Tripartite Alliance for Dispute Management</a>
					</p>
					<p>
						<a class= "hover:font-black font-bold mont underline mt-4" href="https://www.mom.gov.sg/employment-practices/salary/paying-salary">Paying salary</a>
					</p>
					<p>
						<a class= "hover:font-black font-bold mont underline mt-4" href="https://mom.gov.sg/newsroom/press-releases/2020/1118-employment-standards-report-2019-2020">Employment Standards Report 2019/2020</a>
					</p>
					<p>	
						<a class= "hover:font-black font-bold mont underline mt-4" href="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/in-principle-approval">In-Principle Approval</a>
					</p>
					<p>
						<a class= "hover:font-black font-bold mont underline mt-4" href="https://www.mom.gov.sg/employment-practices/salary/itemised-payslips">Itemised pay slips</a>
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