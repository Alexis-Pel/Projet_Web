<template>
    <div>
    <div class="container">
      <h1 class="title">
        ZeldaWiki
      </h1>
    </div>
    <div class='linksMenu'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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