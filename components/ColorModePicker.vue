<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <p>
    </p>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  components: {
    IconLight,
    IconDark,
    IconSepia
  },
  data () {
    return {
      colors: ['light', 'dark', 'sepia']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
  bottom: 1px;
  margin-top: -4px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding-left: 5px;
}
p {
  margin: 0;
}
.feather {
  width: 27px;
  height: 27px;
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 3px;
  background-color: none;
  color: var(--text-header);
  margin: 0;
  border-radius: 50%;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--background-color);
  top: -3px;
}
.feather.selected {
  color: var(--background-color);
}

@media (max-width: 767px) {
div {
  position: absolute;
  bottom: 1px;
  margin-top: -4px;
}
}
</style>