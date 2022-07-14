<template lang="pug">
section
  Header
  SideNav
  div.portfolio
    div.portfolio-headings
      h2.portfolio__txt {{ title }}
      div.divider-line
  div.container
    div.card(v-for="item in $t('portfolio.info')")
      div.card__image
        img(:src="item.img")
      div.card__title
        h3 {{ item.name }}
        h5 {{ item.description }}
      div.card__proyects-link
        a
          i.techn {{ item.technology[0] }}
        a
          i.techn {{ item.technology[1] }}
        a
          i.techn {{ item.technology[2] }}
      div.card__buttons
        a(:href="item.github", v-if="item.github", target="_blank")
          button.btn.proyect-github GitHub
        a(:href="item.deploy", target="_blank")
          button.btn.proyect-github Publish
  Footer
</template>

<script>
export default {
  data () {
    return {
        image: 'https://i.snipboard.io/moLT2e.jpg',
    }
  },
   head: {
      title: 'Proyectos'
  },
   computed: {
    title() {
      return this.$t("portfolio.title")
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
    padding: 3em 3em .5em 3em;
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
    .portfolio {
      margin-top:-88px;
    }
     .container {
      margin-top:-38px;
     }
    .portfolio-headings {
      padding-top: 3em;
      padding-left: 2.1em;
      h2 {
        font-size: 1.5em;
      }
  }
  }
</style>
