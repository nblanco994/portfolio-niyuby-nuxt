<template lang="pug">
section
  Header
  SideNav 
  div.portfolio
    div.portfolio-headings
      h2.portfolio__txt Mi Portafolio
      div.divider-line
  div.container {{template()}}
    div.card(v-for="proyect in proyects")
      div.card__image
        img(:src="proyect.img")
      div.card__title
        h3  {{ proyect.name }}
        h5 {{ proyect.description }}
      div.card__proyects-link
        a
          i.techn {{ proyect.technology[0] }}
        a
          i.techn {{ proyect.technology[1] }}
        a
          i.techn {{ proyect.technology[2] }}
      div.card__buttons
        a(:href="proyect.github", target="_blank")
          button.btn.proyect-github GitHub
        a(:href="proyect.deploy", target="_blank")
          button.btn.proyect-github Publish
  Footer
</template>

<script>
const proyects = [
    { name: 'Portafolio', description: 'Portafolio realizado en Nuxt.js, para conocer mis proyectos realizados como desarrolador Frontend.', technology: ['PUG', 'Scss', 'Nuxt.js'], img: 'https://i.snipboard.io/Re7sYM.jpg?nocache=1636499015001', github: 'https://github.com/nblanco994/portfolio-niyuby-nuxt', deploy: 'https://loving-perlman-efc9e7.netlify.app/'},
    { name: 'Social Media Challenge', description: 'Proyecto realizado, como reto semana número 7, en #PlatziWebChallenge - Platzi.', technology: ['HTML', 'CSS', 'JS'], img: 'https://i.snipboard.io/lpx9yw.jpg?nocache=1636499418530', github: 'https://github.com/nblanco994/reto7-social-media-challenge-platzi', deploy: 'https://nblanco994.github.io/reto7-social-media-challenge-platzi/'},
    { name: 'Mi Blog', description: 'Proyecto realizado en el Curso Práctico de Maquetación en CSS - Platzi, por Diego De Granda.', technology: ['HTML', 'CSS', 'DevTools'], img: 'https://i.snipboard.io/n0bsSe.jpg', github: 'https://github.com/nblanco994/curso-maquetacion-css-platzi', deploy: 'https://nblanco994.github.io/curso-maquetacion-css-platzi/'},
    { name: 'JS Portfolio', description: 'Proyecto realizado en el Curso de Webpack - Platzi, por Oscar Barajas Tavares.', technology: ['HTML', 'minicss', 'Babel'], img: 'https://i.snipboard.io/d084I6.jpg', github: 'https://github.com/nblanco994/curso-webpack-gndx', deploy: 'https://agitated-cray-873ecd.netlify.app/'},
    { name: 'Cientifico', description: 'Proyecto realizado en el Curso de SPA con Javascript Vainilla - Platzi, por Oscar Barajas Tavares', technology: ['HTML', 'CSS', 'JS'], img: 'https://i.snipboard.io/RxKHOl.jpg', github: 'https://github.com/nblanco994/curso-spa/', deploy: 'https://nblanco994.github.io/curso-spa/'},
    { name: 'Platzi Music', description: 'Pyoyecto realizado en el Curso Profesional de VueJS - Platzi, por Ignacio Anaya.', technology: ['JS', 'Vue.js', 'Nuxt.js'], img: 'https://i.snipboard.io/tJXofL.jpg?nocache=1636497390484', github: 'https://github.com/nblanco994/platzi-music-nuxt-app', deploy: 'https://platzi-music-nuxt-eight.vercel.app/'},
]
export default { 
  data () {
    return {
        image: 'https://i.snipboard.io/moLT2e.jpg',
        proyects: []
    }
  },
   head: {
      title: 'Proyectos'
  },
  methods: {
    template () {
        this.proyects = proyects
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
  section {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
  }

  .portfolio__txt {
    color: var(--text-header);
    font-size: 1.6em;
  }

  .divider-line {
    height: 4px;
    width: 60px;
    background-color: rgb(194, 149, 231);
    margin-top: 5px;
    margin-bottom: 2em;
    }

  .portfolio-headings {
    width: 100%;
    padding: 3em;
    h2 {
        font-size: 2.5em;
    }
  }
  .container {
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .card {
          width: 300px;
          background-color: var(--background-color);
          margin: 20px;
          box-shadow: 5px 3px 11px -5px var(--html-background-color);
      }
      .card__image img{
          width: 100%;
          height: 270px;
          object-fit: cover;
      }
      .card__title {
          padding: 20px;
          color: var(--text-secondary);
          h5 {
            padding-top: 10px;
            font-weight: 400;
          }
      }
      .card__proyects-link {
        display: flex;
        justify-content: space-evenly;
        a {
            width: 68px;
            text-align: center;
            background-color: var(--color-tags);
            font-size: .8em;
            color: var(--text-tags);
            padding: 4px;
            font-weight: 600;
            text-decoration: none;
        }
      }
      .card__buttons {
          display: flex;
          justify-content: space-evenly;
          padding: 15px;
          button {
            text-transform: uppercase;
            color: var(--button-primary);
            font-weight: bold;
            font-size: .8em;
          }
      }
      .btn {
        border: 2px solid var(--button-primary);
        background-color: var(--background-color);
        padding: 10px 20px;
        margin-top: 15px;
      }

      .btn:hover {
        background-color: var(--button-primary);
        color: #fff;
        transition: ease-in .4s;
        box-shadow: 1px 3px 11px -5px rgba(102, 231, 200, .69);
      }
  }

  @media (max-width: 767px) {
     .container {
      justify-content: center;
    }
    .portfolio, .container {
      margin-top:-83px;
    }
    .portfolio-headings {
      h2 {
          font-size: 1.5em;
      }
  }
  }
</style>