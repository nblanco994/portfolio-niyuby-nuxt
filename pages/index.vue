<template lang="pug">
html
  div
    Header
    SideNav
    nuxt
    inicio
    Footer
</template>

<script>
export default{
  computed: {
            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        },

        watch: {
            '$route'() {
                if (process.client && this.isSidebar && window.innerWidth < 768) {
                    this.$store.dispatch('nav/toggleSidebar')
                }
            },
        }

    }
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
</style>