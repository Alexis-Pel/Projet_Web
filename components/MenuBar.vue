<template>
    <div>
    <div class="container">
      <h1 class="title">
        ZeldaWiki
      </h1>
    </div>
    <div class='linksMenu'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NuxtLink class="nav-link" to="/">Menu</NuxtLink>
              <NuxtLink class="nav-link" to="/carte">Carte</NuxtLink>
              <NuxtLink class="nav-link" to="/">Armes</NuxtLink>
              <NuxtLink class="nav-link" to="/">Armures</NuxtLink>
              <NuxtLink class="nav-link" to="/">Monstres</NuxtLink>
              <NuxtLink class="nav-link" to="/nourriture">Nourriture</NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
a{
  padding: 15px;
  background-color: #526488b4;
  border:solid 1px #2a3949;
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
  color: #13ca93;
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