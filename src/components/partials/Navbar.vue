<template>
	<nav class="fixed w-full shadow z-50" 
    v-bind:class="{ 'bg-green-main': !hutActive, 'bg-yellow-main': !journeyActive, 'bg-blue-main': !blueActive, 'bg-pink-main': !pinkActive, 'bg-orange-main': !orangeActive  }">
    <div class="max-w-7xl mx-auto px-2">
      <div class="flex justify-between md:h-24 h-16">
        <div class="flex justify-between md:w-0 w-full">
          <router-link @click.native="$scrollToTop" :to="{name: 'main'}" class="flex-shrink-0 flex items-center">
            <img class="block h-16 w-auto" src="../../assets/images/logo.png" alt="A Land for all">
          </router-link>
          <div class="-ml-1 mr-1 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <div id="menuToggle">
                <input type="checkbox" v-on:click="isActive = !isActive" class="" />

                <span></span>
                <span></span>
                <span></span>
                <div></div>
              </div>
            </button>
          </div>
        </div>
        <div class="md:space-x-8 md:flex hidden w-4xl">
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link @click.native="$scrollToTop" :to="{name: 'journey'}" class="border-transparent border-b-2 hover:border-gray-300 hover:text-gray-100 text-gray-500 inline-flex items-center px-1 pt-1 text-base font-bold uppercase mont" 
            v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
              Alfa’s Journey
            </router-link>

            <router-link @click.native="$scrollToTop" :to="{name: 'hut'}" class="border-transparent border-b-2 hover:border-gray-300 hover:text-gray-100 text-gray-500 inline-flex items-center px-1 pt-1 text-base font-bold uppercase mont" 
            v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
              Knowledge Hut
            </router-link>
            <div class="flex md:space-x-2">
              <a href="https://www.instagram.com/alandforall/" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/alandforall/" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCjcO_FaqbvRUumxPrRx1pXQ" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-x-50"
      enter-to-class="opacity-100 scale-x-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-x-100"
      leave-to-class="opacity-0 scale-x-50"
    >
      <div v-show="isActive">
        <div class="pt-2 pb-3 space-y-2">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <router-link @click.native="$scrollToTop" :to="{name: 'journey'}" 
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-bold sm:pl-5 sm:pr-6 uppercase mont text-right" 
            v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
              Alfa’s Journey
            </router-link>
          <router-link @click.native="$scrollToTop" :to="{name: 'hut'}" 
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-bold sm:pl-5 sm:pr-6 uppercase mont text-right" 
          v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }">
            Knowledge Hut
          </router-link>
          <div class="flex flex-row justify-end space-x-6 mr-4">
            <div>
              <a href="https://www.instagram.com/alandforall/" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }"><i class="fab fa-instagram"></i></a>
            </div>
            <div>
              <a href="https://www.facebook.com/alandforall/" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }"><i class="fab fa-facebook"></i></a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCjcO_FaqbvRUumxPrRx1pXQ" class="border-transparent text-white hover:border-gray-100 hover:text-gray-100 inline-flex items-center text-2xl font-bold" v-bind:class="{ 'text-green-impact': !hutActive, 'text-yellow-impact': !journeyActive, 'text-blue-impact': !blueActive, 'text-pink-impact': !pinkActive, 'text-orange-impact': !orangeActive }"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
        journeyActive: false,
        hutActive: false,

        blueActive: false,
        pinkActive: false,
        orangeActive: false,
      };
    },
    computed: {
      fluxBlue () {
        return this.$store.state.fluxBlue
      },
      fluxPink () {
        return this.$store.state.fluxPink
      },
      fluxOrange () {
        return this.$store.state.fluxOrange
      }
    },
    created() {
      this.handleRoute(this.$route.name)
    },
    watch: {
      '$route'() {
        this.handleRoute(this.$route.name)
      },
      fluxBlue() {
        this.handleRoute(this.$route.name)
      },
      fluxPink() {
        this.handleRoute(this.$route.name)
      },
      fluxOrange() {
        this.handleRoute(this.$route.name)
      },
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0);
      },
      handleRoute(curr) {
        if (curr === 'main') {
          this.journeyActive = true;
          this.hutActive = true
          this.isActive = false

          if (this.fluxBlue) {
            this.blueActive = false
            this.pinkActive = true
            this.orangeActive = true
          }
          else if (this.fluxPink) {
            this.blueActive = true
            this.pinkActive = false
            this.orangeActive = true
          }
          else if (this.fluxOrange) {
            this.blueActive = true
            this.pinkActive = true
            this.orangeActive = false
          }
          else {
            this.blueActive = false
            this.pinkActive = true
            this.orangeActive = true
          }
        }
        if (curr === 'journey') {
          this.journeyActive = false;
          this.hutActive = true
          this.isActive = false

          this.blueActive = true
          this.pinkActive = true
          this.orangeActive = true
        }
        if (curr === 'hut' || curr === 'quiz' || curr === 'thank') {
          this.journeyActive = true;
          this.hutActive = false
          this.isActive = false

          this.blueActive = true
          this.pinkActive = true
          this.orangeActive = true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.router-link-active {
  @apply text-gray-900
}
</style>