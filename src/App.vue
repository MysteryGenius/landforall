<template>
  <div id="app" class="flex flex-col">
    <navbar/>

    <router-view></router-view>

    <footerbar/>
  </div>
</template>

<script>
  import Navbar from './components/partials/Navbar.vue'
  import Footer from './components/partials/Footer.vue'

  export default {
    name: 'App',
    components: {
      navbar: Navbar,
      footerbar: Footer
    },
  }
</script>
