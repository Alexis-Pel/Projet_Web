<template>
    <div class="containerStory">
        <div class="overflow">
            <h1>En cours de construction</h1>
          <img src="../static/background/link-cutout.png">
        </div>
        
    </div>
</template>

<script>
// export default{
//     data() {
//         return{
//             storyData: []
//         }
//     },
//       async fetch() {
//       this.storyData  =  await fetch('http://localhost/ctrlstory.php')
//       .then(res => res.json())
//       .then(res => console.log(res))
//     },
// }
</script>


<style scoped>
.containerStory{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-family:"Zelda Font";
    background-image: url('../static/background/Main-Day.jpeg');
    width: 100%;
    min-height: 100vh; 
    z-index: -100;  
    background-size: cover;
    background-position: center;
    padding: 5rem 8rem 0rem 8rem;
}
.overflow{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    min-height: 85vh;
    min-width: 85vh;
    margin-bottom: 3rem;
    width: 100%;
    border-radius: 1rem;
    background: rgba(254, 255, 255, 0.795);
    line-height: 1;
    overflow: hidden;
  }

  .overflow::before {
    content: '';
    margin: -35px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);
  }
</style>