<template>

   <!-- <header>
       sadfafasf
   </header>  -->
   <nav>
     <div class="navbar">
        <div class="categories">
           <NuxtLink class="linkMenu" to="/">Home</NuxtLink>
           <NuxtLink class="linkMenu" to="/food">Food</NuxtLink>
           <NuxtLink class="linkMenu" to="/map">Map</NuxtLink>
           <NuxtLink class="linkMenu" to="/weapon">Armes</NuxtLink>
           <NuxtLink class="linkMenu" to="/armor">Armures</NuxtLink>
           <NuxtLink class="linkMenu" to="/">Histoire</NuxtLink>
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
  margin-top: 1.5rem;
  /* position: absolute; */
  padding: 10px 10px;
  background: rgba(79, 112, 150, 0.3);
  font-size: 20px;
  line-height: 1.5;
  border-radius: 2rem;
  width: 550px;
  height: 70px;
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