<template lang="pug">
section
  Header
  SideNav
  div.about
    img(:src="image", alt="Niyuby Blanco")
    div.info
        h2 Acerca de 
          span mi
        div.divider-line
        p Cuando no estoy codigueando, en mi computadora, me gusta pintar al aire libre, la fotografía y hornear pasteles con temática artística.
        transition(name="slide")
            div(v-if="showAlert")
                p Te invito a crecer juntos, aportemos a la red de programadores, investiga lo que no puedes entender, ama tu curiosidad y nunca des un stop, persevera en tu pasión. No dejes huellas, deja semillas de fé, esperanza, de trabajo y esfuerzo para que otros aprendan y crezcan desde esa dirección. 
                p ¡Te mando un fuerte saludo y abrazo desde Venezuela! 🇻
        transition(name="slide")
            button.cv.myBtn(@click="toggle") Leer más
  Footer
</template>

<script>
export default {
    data () {
    return {
        image: 'https://i.snipboard.io/5yjP7h.jpg',
        showAlert: false
    }
  },
  head: {
      title: 'Acerca de'
  },
  computed: {
    text () {
        return this.showAlert ? "Hide" : "Show";
    }
  },

  methods: {
    toggle() {
        this.showAlert = !this.showAlert;
    }
  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
  section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
  }
  .about {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      width: 100%;
      align-items: center;
      h2, p {
          color: var(--text-header);
      }
      h2 {
        font-size: 1.6em;
      }
      span {
        color: rgb(194, 149, 231);
      }
      .description, #more, #less {
        color: var(--text-header);
      }
      #less {
          display: none;
      }
      img {
        width: 100%;
        grid-column: 1/5;
      }
      .info {
          grid-column: 5/10;
          padding: 3em;
      }
      a {
        padding: 5px;
      }
      .instagram { 
        margin-top: 5px;
        color: rgb(194, 149, 231); 
        font-size: 2em;
      }
      .divider-line {
        height: 4px;
        width: 60px;
        background-color: rgb(194, 149, 231);
        margin-top: 5px;
        margin-bottom: 2em;
      }
  }
.slide-enter-active {
  animation: slide-in .5s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out .3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 1;
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
    opacity: 0;
  }
}

 @media (max-width: 767px) {
   .about {
     display: flex;
     flex-wrap: wrap;
     padding: 0;
     align-items: right;
     margin-top: -50px;
      h2 {
        font-size: 1.5em;
      }
      .info {
        padding: 10px;
  }
  }
}
</style>