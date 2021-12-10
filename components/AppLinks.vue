<template lang="pug">
    nav.navbar
      div.brand
        h2 N
          span B
      ul.menu.nav-list
        div.contain
          div.items
            li.nav-item
              nuxt-link.active.linked-to(to="/", exact) {{ inicio }}
          div.items
            li.nav-item
              nuxt-link.active(to="/portfolio") {{ portafolio }}
          div.items
            li.nav-item
              nuxt-link.active(to="/acercade") {{ acercade }}
          div.items
            li.nav-item
              nuxt-link.active(to="/contacto") {{ contacto }}
          ColorModePicker
</template>
<script>
export default {
  computed: {
    inicio() {
      return this.$t("header.inicio")
    },

    portafolio() {
       return this.$t("header.portafolio")
    }, 

    acercade() {
      return this.$t("header.acercade")
    },

    contacto() {
      return this.$t("header.contacto")
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

 @mixin btn-border-slide($color, $hoverColor, $borderWidth, $time) {
  $easing: cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    height: $borderWidth;
    width: 50%;
    background-color: $color;
  }

  &:before {
    bottom: 0;
  }
  &:hover {

    & > * {

      & > * {

        &:before
         {
          transform: translate3d(0, 0, 0);
        }

        & > * {
          &:before {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  & > * {

    &:before {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: $borderWidth;
      background-color: $color;
    }

    &:before {
      right: 0;
    }

    & > * {

      &:before {
        content: "";
        position: absolute;
        left: 0;
        height: $borderWidth;
        width: 50%;
        background-color: $hoverColor;
      }

      &:before {
        bottom: 0;
        transform: translate3d(-105%, 0, 0);
        transition: transform $time $easing;
      }

      & > * {

        &:before{
          content: "";
          position: absolute;
          top: 0;
          z-index: 9;
          height: 100%;
          width: $borderWidth;
          background-color: $hoverColor;
        }

        &:before {
          left: 0;
          transform: translate3d(0, 105%, 0);
          transition: transform $time $easing;
        }
      }
    }
  }
} 
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
        
      }
    }
    a.nuxt-link-active {
      color: var(--color-nuxt-link-active);
    }
    .items {
      margin-right: 20px;
      margin-left: 20px;
      @include btn-border-slide(#25252500, var(--line-style), 2px, 0.8s);
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