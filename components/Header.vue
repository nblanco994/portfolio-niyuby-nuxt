<template lang="pug">
section.wrapper
  header
    div(class="drawer-toggle", role="button", @click="$store.dispatch('nav/toggleSidebar')")
      div(class="bar")
      div(class="bar")
      div(class="bar")
    div.links-nav
      AppLinks
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
 .wrapper {
     width: 100%;
     height: 15vh;
     background-color: var(--background-color);
     text-align: center;
     font-family: 'Montserrat', sans-serif;
     color: var(--text-header);
 }

.drawer-toggle .bar {
        width: 25px;
        height: 3px;
        margin-top: 4px;
        background-color: var(--text-header);
    }

    .drawer-toggle {
        display: flex;
        justify-self: end;
        flex-direction: column;
        justify-content: space-around;
        height: 50%;
        width: 35px;
        padding-right: 16px;
        padding-top: 13px;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        header{
            padding: 0 16px;
        }
        header:nth-child{
            justify-self: end !important;
        }
         .links-nav {
            display: none;
        }
    }

    @media (min-width: 768px) {
        .links-nav {
            display: block;
        }
        .drawer-toggle {
            display: none;
        }

    }
</style>