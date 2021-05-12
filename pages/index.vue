<template>
  <div>
    <div class="container">
      <h1 class="title">
        ZeldaWiki
      </h1>
    </div>
    <div class="linksMenu">
      <NuxtLink to="/">Menu</NuxtLink>
      <NuxtLink to="/">Armure</NuxtLink>
      <NuxtLink to="/">Monstres</NuxtLink>
      <NuxtLink to="/">Montures</NuxtLink>
      <NuxtLink to="/">Armes</NuxtLink>
      <NuxtLink to="/">Nourriture</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
a{
  padding: 15px;
  background-color: #526488b4;
  border:solid 1px #2a3949
}
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #00c58e;
}

.linksMenu {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-color: #526488;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
