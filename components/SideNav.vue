<template lang="pug">
  div(class="sidenav-container")

    div(v-if="isSidebar", class="backdrop", @click="hideSidebar")

    transition(name="slide-side")
      div(v-if="isSidebar", class="sidenav")
        span(@click="hideSidebar") &#128473;
        AppLinks
</template>

<script>
export default {
        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        },
        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        }

    }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    .sidenav-container {
        height: 100%;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
    }

    .sidenav {
        height: 100%;
        width: 320px;
        z-index: 10000;
        position: fixed;
        background-color: var(--background-color);
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 10px;
    }

    .sidenav span {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
    }

    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(-100%);
    }

@media (min-width: 768px) {
    .sidenav-container {
        display: none;
    }
}
</style>