<template lang="pug">
section
  Header
  SideNav
  div.contact-section
    div.contact-headings
      h2 Contáctame
      div.divider-line
    div.container-contact
      form.form(v-on:submit.prevent="handleSubmit")
        h3 Envíame un mensaje...
        div.input-group
          input.form-control#name(v-model="form.name", type="text", name="name", required)
          span.highlight
          span.bar
          label Nombre
        div.input-group
          input.form-control(v-model="form.email", type="email", name="email", required)
          span.highlight
          span.bar
          label Correo Electrónico
        div.input-group 
          h4 Mensaje
          textarea.form-control(v-model="form.message", name="message", required)
        div.sub
          button.submit(type="submit") Enviar
        div.by
          h5 Power by 
          img(:src="image", alt="Formeezy") 
  Footer
</template>
<script>
import axios from 'axios';

  export default {
    name: 'ContactForm',
    data() {
      return {
        image: 'https://formeezy.com/_next/image?url=%2Fformeezy-logo.svg&w=1080&q=75',
        form: {
          name: "",
          email: "",
          message: ""
        },
      };
    },
    head: {
      title: 'Contacto'
  },
    methods: {
      async handleSubmit() {
        const formData = new FormData();

        for (const [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }
        await axios
          .post("https://formeezy.com/api/v1/forms/618c125b9882290008dc0db2/submissions", formData)
          .then(({ data }) => {
            const { redirect } = data;
           // Redirect used for reCAPTCHA and/or thank you pag
            window.location.href = redirect;
          })
          .catch((e) => {
            window.location.href = e.response.data.redirect;
          });
      }
    }
  }; 
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

  section {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
  }
  .contact-section h2 {
    color: $text-secondary;
    font-size: 1.6em;
   }
   .contact-headings {
      padding: 3em 3em 0 3em;
   }
  .container-contact {
    padding: 1em;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    h4, h3 {
      color: $text-secondary;
      margin-bottom: 20px;
    }
    .form {
      display: flex;
      flex-direction: column;
      width: 30vw;
      margin-top: 2em;
      input {
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 1em;
        color: var(--text-header);
        background: none;
        border: none;
      }
      textarea {
        width: 100%;
        height: 150px;
        background: none;
        padding: 1em;
        border: 1px solid rgb(194, 149, 231);
        outline: none;
        resize: none;
        overflow: auto;
        color: $text-secondary;
      }
      textarea:focus {
            border-color: rgb(194, 149, 231);
            box-shadow: 5px 3px 7px -5px rgb(194, 149, 231);
        }
        h4 {
            color: var(--text-header);
            font-size: 18px;
            font-weight: normal;
            position: relative;
            pointer-events: none;
            left: 5px;
            top: 10px;
        }
      .sub {
          text-align: center;
      }
      .submit {
        width: 150px;
        border: 2px solid rgb(194, 149, 231);
        background-color: var(--background-color);
        padding: 10px 20px;
        margin-top: 15px;
        color: var(--button-primary);
        border: 2px solid var(--button-primary);
      }

      .submit:hover {
        background-color: rgb(149, 231, 160);
        border: 2px solid rgb(149, 231, 160);
        color: #fff;
        transition: ease-in .4s;
        box-shadow: 1px 3px 11px -5px rgba(102, 231, 200, .69);
      }
    }
  }
  .divider-line {
    height: 4px;
    width: 60px;
    background-color: rgb(194, 149, 231);
    margin-top: 5px;
    margin-bottom: 2em;
    }

    .by {
      margin: 10px;
      align-items: center;
      text-align: center;
      color: var(--text-header);
      img {
          width: 80px;
          height: auto;
      }
    }


    .input-group {
      position: relative;
      margin: 40px 0 20px;
    }

    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 300px;
      border: none;
      border-bottom: 1px solid #757575;
    }

    input:focus {
      outline: none;
    }

    label {
      color: var(--text-header);
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      font-size: 14px;
      color: rgb(213, 179, 241);
    }

    .bar {
      position: relative;
      display:block;
      width:315px;
    }

    .bar:before,
    .bar:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: rgb(194, 149, 231);
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .bar:before {
      left: 50%;
    }

    .bar:after {
      right: 50%;
    }

    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
      width: 50%;
    }

    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }

    input:focus ~ .highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }
    /* animations */
    @-webkit-keyframes inputHighlighter {
    from { background: rgb(194, 149, 231); }
    to   { width: 0; background: transparent; }
    }
    @-moz-keyframes inputHighlighter {
    from { background: rgb(194, 149, 231); }
    to   { width: 0; background: transparent; }
    }
    @keyframes inputHighlighter {
    from { background: rgb(194, 149, 231); }
    to   { width: 0; background: transparent; }
    }

     @media (max-width: 767px) {
       .contact-section {
          margin-top: -50px;
       }
       h2 {
         font-size: 1.5em;
       }
       .container-contact {
         padding: 0;
         .form { 
           padding: 0;
           width: 80%;
         }
       }

     }
</style>