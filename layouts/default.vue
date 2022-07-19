<template data-theme="light">
  <div>
    <TopBar />
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
    computed: {},
    mounted(){
      if (process.client) {
        window.addEventListener('scroll', ()=>{
          if (window.scrollY > 50) {
            this.$store.commit('setDynamicClass',true)
          } else {
            this.$store.commit('setDynamicClass',false)
          }
          if (window.scrollY > 300) {
            this.$store.commit('setDynamicClass2',true)
          } else {
            this.$store.commit('setDynamicClass2',false)
          }
        });
      }
    },
}
</script>
