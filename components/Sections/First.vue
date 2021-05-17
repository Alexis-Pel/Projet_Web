<template>
    <div class="abc">
        <b-jumbotron header="Wiki Zelda" lead="Bievenue dans le wiki Zelda BOTW">
        <p>Voici le guide ultime sur le jeu !</p>
        </b-jumbotron> 
        <video id="idVideo" controls preload="true" autoplay loop muted>
        <source src="" type="video/mp4" >
        </video> 
    </div>
</template>
<script>


</script>

<style scoped>
  .abc{
      min-height: 100vh; 
      height: 200px;
      width: 90%;
      min-height: 100vh; 
      /* background-image: url(../../static/background/landing.mp4); */
      background-size: cover;
      background-position: center; 
      display: flex;
       justify-content: center; 
      align-items: center;
  }
  .jumbotron{
      background-color: transparent;
      width: 100%;
      padding: 0;
  }


    video#idVideo {
    /* right: 0;
    bottom: 0;
    let: 0; */
    min-width: 100%;
    min-height: 100%;
   
    z-index: -100;  
    background-size: cover;
    background-position: center;
    }
</style>