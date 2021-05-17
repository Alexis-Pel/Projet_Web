<template>
    <div class="abc">
        <b-jumbotron header="Wiki Zelda" lead="Bievenue dans le wiki Zelda BOTW" style="position: absolute; margin-left:75vh">
        <p >Voici le guide ultime sur le jeu !</p>
        </b-jumbotron> 
        <video id="idVideo" autoplay loop muted>
        <source src="/background/landing.mp4" type="video/mp4" >
        </video> 
    </div>
</template>
<script>


</script>

<style scoped>
  .abc{
      min-height: 100vh; 
      height: 200px;
      width: 100%;
      display: flex;
       justify-content: center; 
      align-items: center;
      margin: 0 !important;
  }
  .jumbotron{
      background-color: transparent;
    width: max-content;
      margin-right: 150vh;
      margin-top: 30vh;;
      padding: 0;
      color: whitesmoke;
      font-size: 30px;
      font-family: 'Zelda Font';
  }


    video#idVideo {
    width: 100%;
    min-height: 100vh; 
    width:100%;
    z-index: -100;  
    background-size: cover;
    background-position: center;
    }
</style>