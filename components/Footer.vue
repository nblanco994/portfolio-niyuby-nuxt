<template lang="pug">
div
  footer.footer
    div.footer-content
      h2.fullname Frontend Developer
      div.divider-line-footer
      button.btn-lang-es(@click="changeLanguage('es')") ES
      button.btn-lang-en(@click="changeLanguage('en')") EN
    div.social-network
      a(href="https://github.com/nblanco994/", target="_blank")
        i.github(class="fab fa-github")
      a(href="https://www.behance.net/devnblanco17", target="_blank")
        i.behance(class="fab fa-behance")
      a(href="https://www.linkedin.com/in/niyuby-h-blanco-c-434496106/", target="_blank")
        i.linkedin(class="fab fa-linkedin-in")
</template>
<script>
export default {
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang;
    }
  },
}
</script>
<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 18vh;
  background-color: var(--background-footer);
}
.footer-content {
  margin: 30px;
  .fullname{
    font-size: 1.1em;
    color: var(--text-footer);
  }
}
.divider-line-footer {
  height: 4px;
  width: 100px;
  background-color: var(--text-lang);
  margin-top: 5px;
  margin-bottom: .4em;
}
.btn-lang-es, .btn-lang-en {
  background-color: none;
  border: 2px solid var(--text-lang);
  color: var(--text-lang);
  border-radius: 50%;
  font-size: .7em;
  width: 32px;
	height: 32px;
  font-weight: 600;
  margin-right: 10px;
}
.btn-lang-es:hover {
  background-color: $red;
  color: $white;
  border: 2px solid $red;
}
.btn-lang-en:hover {
  background-color: $blue;
  color: $white;
  border: 2px solid $blue;
}
.social-network {
  display: flex;
  width: 250px;
  text-align: center;
	padding: 20px 0;
  a {
    transition: .3s ease all;
    :hover {
    animation: icon .5s ease;
}
  }
  i {
    font-size: 1.3em;
    width: 45px;
	  height: 45px;
    border-radius: 50%;
	  color: #fff;
    padding: 14px 0;
    margin: 0 10px;
  }
  .github { background: var( --color-github); }
  .behance { background: var(--color-behance); }
  .linkedin { background: var(--color-linkedin); }
}

@keyframes icon {
  from {
    transform: rotate3d(0,0,0,0);
  }
  to {
     transform: rotate3d(0,1,0,360deg);
  }
}
</style>