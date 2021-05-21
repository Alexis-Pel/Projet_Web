<template>
   <nav>
     <div class="navbar">
        <div class="categories">
           <NuxtLink class="linkMenu" to="/">accueil</NuxtLink>
           <NuxtLink class="linkMenu" to="/map">carte du monde</NuxtLink>
           <NuxtLink class="linkMenu" to="/feed">nourriture</NuxtLink>
           <NuxtLink class="linkMenu" to="/animals">animaux</NuxtLink>
           <NuxtLink class="linkMenu" to="/weapon">armes</NuxtLink>
           <NuxtLink class="linkMenu" to="/armor">armures</NuxtLink>
           <NuxtLink class="linkMenu" to="/sanctuary">sanctuaires</NuxtLink>
           <NuxtLink class="linkMenu" to="/story">histoire</NuxtLink>
        </div>
     </div>
   </nav>

</template>


<script>


</script>


<style scoped>
    nav{
        display: flex;
        justify-content: center;      
    }

.navbar {
  font-family: "Zelda Font";
    margin-top: 1.5rem;
    /* position: absolute; */
    padding: 10px 11px;
    background: rgba(29, 168, 126, 0.12);
    font-size: 25px;
    line-height: 1.5;
    border-radius: 2rem;
    width: fit-content;
    /* padding: 0rem 2rem; */
    height: 45px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 5;
}

.navbar::before {
  content: '';
  margin: -35px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(20px);
  z-index: -1;
}

.linkMenu {
    text-decoration: none;
    font-weight: bold;
    color: aliceblue;
    transition: all 0.4s ease-in-out;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.linkMenu:hover {
    text-decoration: none;
    font-weight: bold;
    color: rgb(212, 212, 212);
    transition: all 0.4s ease-in-out;
}


</style>