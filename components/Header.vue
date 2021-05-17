<template>

   <!-- <header>
       sadfafasf
   </header>  -->
   <nav>
     <div class="navbar">
        <div class="categories">
           <NuxtLink class="linkMenu" to="/">accueil</NuxtLink>
           <NuxtLink class="linkMenu" to="/map">carte du monde</NuxtLink>
           <NuxtLink class="linkMenu" to="/food">nourriture</NuxtLink>
           <NuxtLink class="linkMenu" to="/">animaux</NuxtLink>
           <NuxtLink class="linkMenu" to="/weapon">armes</NuxtLink>
           <NuxtLink class="linkMenu" to="/armor">armures</NuxtLink>
           <NuxtLink class="linkMenu" to="/">histoire</NuxtLink>
        </div>
     </div>
   </nav>

   <!-- <div></div> -->
  
   
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
  background: rgba(38, 150, 116, 0.3);
  font-size: 20px;
  line-height: 1.5;
  border-radius: 2rem;
  width: 700px;
  height: 45px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
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