<template lang="pug">
main.main(value="light")
  div.info-content
    h2.title {{ title }}
      span.name Niyuby 
      span.lastname Blanco 😆
    p {{ moreme }}
    a(download="", href="/CV-ESP-Europass-20190214-BlancoCruz-ES.pdf")
      button.cv {{ cv }}
  div.card_photo.center.circle
    img(:src="image", alt="Niyuby Blanco")
    svg(viewBox="0 0 100 100", xmlns="http://www.w3.org/2000/svg", style="enable-background:new -580 439 577.9 194;", xml:space="preserve")
        circle(cx="50", cy="50", r="40")
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    ColorModePicker
  },

    data () {
    return {
        image: 'https://i.snipboard.io/moLT2e.jpg'
    }
  },

  head: {
    title: 'Portafolio'
  },

  computed: {
    title() {
      return this.$t("home.title")
    },

    cv() {
       return this.$t("home.cv")
    }, 

    moreme() {
      return this.$t("home.moreme")
    }
  },

  colorMode: 'system'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
main {
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;
  height: 80vh;
  background-color: var(--background-color);
  display: grid;
  font-family: 'Montserrat', sans-serif;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  img {
      width: 350px;
      height: 360px;
      object-fit: cover;
      border-radius: 50%;
  }
}
.card_photo {
  margin-left: 30px;
  border-radius: 50%;
  padding: 5px;
  width: 450px;
  height: 450px;
}
.title {
  font-size: 3em;
  color: $text-secondary;
  .name {
      color: $text-primary;
  }
}

p{
  margin-top: 20px;
  line-height: 27px;
  color: $text-secondary;
}

.cv {
  background-color: var(--background-color);
  border: 2px solid var(--text-primary);
  color: var(--text-primary);
  padding: 12px 20px;
  font-weight: 600;
  margin-top: 18px;
}

.cv:hover {
  background-color: var(--stroke-transform);
  color: $white;
  transition: ease-in .4s;
  border: 2px solid var(--stroke-transform);
  box-shadow: 1px 3px 11px -5px $green;
}

.circle {
  position: relative;
}

.circle svg {
  fill: none;
  stroke: $stroke;
  stroke-linecap: round;
  stroke-width: 3;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: stroke-draw 6s ease-out infinite alternate;
}
.circle img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes stroke-draw {
  from {
    stroke: $stroke;
    stroke-dasharray: 1;
  }
  to {
    stroke: $stroke-transform;
    transform: rotate(180deg);
    stroke-dasharray: 8;
  }
}

 @media (max-width: 767px) {
   .main {
     display: flex;
     flex-wrap: wrap-reverse;
     padding: 15px;
     margin-top: -80px;
     img {
        width: 150px;
        height: 150px;
    }
    .circle img {
      left: 49%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .card_photo {
    margin-left: 20%;
    margin-right: 10px;
    border-radius: 50%;
    padding: 5px;
    width: 200px;
	  height: 200px;
  }
  .title {
    font-size: 1.5em;
  }
}
</style>

