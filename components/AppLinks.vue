<template lang="pug">
    nav.navbar
      div.brand
        h2 N
          span B
      ul.menu.nav-list
        div.contain
          li.nav-item
            nuxt-link.active.linked-to(to="/", exact) Inicio
          li.nav-item
            nuxt-link.active(to="/portfolio") Portafolio
          li.nav-item
            nuxt-link.active(to="/acercade") Acerca de
          li.nav-item
            nuxt-link.active(to="/contacto") Contacto
          ColorModePicker
</template>
<script>
export default {
        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        }
}
</script>
<style lang="scss" scoped>
        
.navbar {
     display: flex;
     justify-content: space-between;
     padding: 2em;
     box-shadow: 5px 3px 6px -5px rgba(147, 147, 147, .69);
     .brand {
       span{
       color: rgb(194, 149, 231);
       }
       h2 {
         color: var(--text-header);
       }
     }
     .menu {
      display: flex;
      width: 55%; 
      justify-content: space-around;
       li {
         list-style: none;
         a {
         color: var(--text-header);
         text-decoration: none;
         padding: 10px 20px;
         }
         a:hover {
             background-color: rgb(194, 149, 231);
             color: var(--text-header);
             transition: ease-in .4s;
         }
       }
       a.nuxt-link-active {
           color: var(--color-nuxt-link-active);
       }
     }
 }

 @media (max-width: 767px) {
        .navbar {
            width: 100%;
            height: 100%;
            margin: 0;
            display: block;
            box-shadow: none;
            padding: 0;
        }
        .menu {
            width: 100%;
            height: 50%;
            flex-wrap: wrap;
            li {
                padding: 0;
                font-size: 16px;
                margin-top: 15px;
                margin-bottom: 8px;
            }
        }
        .brand {
            padding: 15px;
            span{
            color: rgb(194, 149, 231);
            }
            h2 {
                color: var(--text-header);
            }
     }
    }

    @media (min-width: 768px) {
        .contain {
            display: flex;
        }
        .menu {
            display: flex;
            flex-wrap: nowrap;
        }
    }
     @media (width: 1024px) { 
       .navbar {
         padding: 1em;
       }
     }
</style>