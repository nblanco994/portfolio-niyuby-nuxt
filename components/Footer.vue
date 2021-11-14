<template lang="pug">
div
  footer.footer
    div.footer-content
      h2.fullname Frontend Developer
    div.social-network
      a(href="https://github.com/nblanco994/", target="_blank")
        i.github(class="fab fa-github")
      a(href="https://www.behance.net/devnblanco17", target="_blank")
        i.behance(class="fab fa-behance")
      a(href="https://www.linkedin.com/in/niyuby-h-blanco-c-434496106/", target="_blank")
        i.linkedin(class="fab fa-linkedin-in")
</template>

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