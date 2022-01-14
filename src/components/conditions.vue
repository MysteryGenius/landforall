<template>
    <div>
        <p class="text-md text-green-impact montsarrat">
            I have read and understood the
            <span v-on:click="show()" class="underline">
              terms & conditions
            </span>
        </p>
        
        <modal name="formModal" height="auto" @closed="beforeClose" :adaptive=true>
            <div class="mt-24 rounded-2xl px-12 overflow-scroll h-screen">
                <h2 class="text-2xl font-bold">Terms and Conditions</h2>
                <p class="my-4 mont text-left">
                    If you participate in A Land For All’s (hereinafter referred to as the ‘Organiser’) promotions and giveaways, you fully accept these general terms and conditions and you acknowledge that you fulfil all eligibility requirements.
                </p>
                <h3 class="mont font-bold my-4 text-left">ELIGIBILITY</h3>
                <p class="my-4 mont text-left">
                    To be eligible to participate in this contest, you must be 13 years of age and above and residing in Singapore with a valid residential address. You must use your own registered social media account when participating in this contest. 
                </p>
                <h3 class="mont font-bold my-4 text-left">DATE OF GIVEAWAYS</h3>
                <p class="my-4 mont text-left">
                    The giveaways shall start and close on the date specified on the Organiser’s Instagram posts. Entries after the closing date will not be accepted.
                </p>
                <h3 class="mont font-bold my-4 text-left">HOW TO ENTER</h3>
                <p class="my-4 mont text-left">                    
                    Each giveaway post will explain the entry procedure. There is no entry fee and no purchase necessary to enter the Giveaways. Only one entry will be accepted per participant; multiple entries from the same participant will not count, unless otherwise stated in the Instagram post. By entering in a Giveaway, you will not be eligible to receive any prizes awarded in any other Giveaway.
                </p>
                <h3 class="mont font-bold my-4 text-left">THE WINNER</h3>
                <p class="my-4 mont text-left">
                    The winners will be chosen at random from all qualifying entries. The winner will be notified by Instagram Direct Message (DM) via our official A Land For All account within five business days after the closing date of the Giveaway. The winner must provide an email address upon receiving the direct message from the Organiser on notification of winning entry. If the winner cannot be contacted within 5 business days, the Organiser reserves the right to withdraw the prize from the winner and pick a replacement winner. The Organiser’s decision in respect of all matters to do with the Giveaway shall be final and shall not be subject to review or appeal by any entrant or by any third party. 
                </p>
                <h3 class="mont font-bold my-4 text-left">PRIZE</h3>
                <p class="my-4 mont text-left"> 
                    The prizes for this contest are neither exchangeable for cash nor transferable. Prizes are subject to availability and we reserve the right to substitute any prize with another equivalent value without giving notice. The Organiser shall not be held liable for the usability and terms and conditions of the vouchers and gift cards. The usability and terms and conditions shall be determined by the merchant from which these prizes were acquired.
                </p>
                <h3 class="mont font-bold my-4 text-left">SHIPMENT</h3>
                <p class="my-4 mont text-left">
                    For physical items, requiring delivery, the Organiser shall bear the cost of one local delivery. 
                </p>
                <h3 class="mont font-bold my-4 text-left">PERSONAL DATA</h3>
                <p class="my-4 mont text-left">
                    All personal data collected in this giveaway will be managed in accordance with the Personal Data Protection Act (PDPA). By participating in a Giveaway, each participant agrees that the Organiser may use the participant’s name in any manner and in any medium for its promotional purposes without additional approval or compensation being required, including posting in a winner’s list, Instagram post and/or Instagram stories.
                </p>
                <h3 class="mont font-bold my-4 text-left">LIMITATION OF LIABILITY</h3>
                <p class="my-4 mont text-left">
                    By entering the Giveaway each entrant agrees to release, discharge and hold harmless the Organiser, client and respective personnel from any damages whatsoever suffered or sustained in connection with the Giveaway or the acceptance of the prize.     
                </p>
                <h3 class="mont font-bold my-4 text-left">GENERAL TERMS AND CONDITIONS</h3>
                <p class="my-4 mont text-left">
                    The Organiser reserves its right to cancel the Giveaways at any time or change the provision of the General Terms and Conditions at its sole discretion and such change shall have immediate effect upon the publication thereof.
                </p>

                <div class="mt-24"></div>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            show () {
                this.$modal.show('formModal');
            },
            hide () {
                this.$modal.hide('formModal');
            },
            beforeClose () {
                this.slate();
            }
        }
    }
    
</script>

<style scoped>
    form {
        margin: 10px auto;
    }
    textarea {
        width: 240px;
    }
</style>
