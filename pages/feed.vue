<template>
    <div class="contaiiner containerFeed">
      <div class="overflow-auto">
        
        <h1 class="mt-3">Nourriture</h1>
        <div class="cards">
          <div class="my-table" 
            :per-page="perPage"
            :current-page="currentPage" 
            :key="index"
            v-for="(feed, index) in currentPageFeeds"
            >
              <b-card
                img-top
                tag="article"
                style="max-width: 20rem; margin:0px; padding:0px;"
                class="mb-2"
                :feedData="feedData"
              >
              
              <b-card-text>
                {{feed.nameFeed}} 
              </b-card-text>

            
              </b-card>
            </div> 
        </div>

        <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
        ></b-pagination>
      </div>
    </div>
  
</template>

<script>
// header("Access-Control-Allow-Origin: *");
  export default {
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        PageFeed: {},
        totalRows: this.feedData,
        nbPages:0,
        feedData : [],
      }
    },
      async fetch() {
      this.feedData  =  await fetch('http://localhost/ctrlfeed.php')
      .then(res => res.json())
      // .then(res => console.log(res))
    },
    computed: {
      rows() {
        return this.feedData.length 
      },
      
      pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
      
      currentPageFeeds() {
      let lengthAll =this.feedData.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
      this.PageFeed[this.nbPages] = this.feedData.slice(
      i,
      i + this.perPage
      );
      this.nbPages++;
      }
      return this.PageFeed[this.currentPage-1];
      }
    },
  }
</script>

<style scoped>
  p{
    font-size: 25px;
  }
  ol, ul, dl {
      margin-top: 1em;
      margin-bottom: 1rem;
  }
  .containerFeed{
    background-image: url('../static/background/Main-Day.jpeg');
    width: 100%;
    min-height: 100vh; 
    z-index: -100;  
    background-size: cover;
    background-position: center;
    padding: 5rem 8rem 0rem 8rem;
    font-family: "Zelda Font";
  }
  .overflow-auto{
    min-height: 85vh;
    border-radius: 1rem;
    background: rgba(254, 255, 255, 0.795);
    line-height: 1;
    overflow: hidden;
  }

  .overflow-auto::before {
    content: '';
    margin: -35px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);
  }

  .mt-3{
    margin-top: 2rem;
    padding-left: 2rem;
    font-size: 3rem;
  }
  .my-table{
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    padding: 0;
    margin: 0rem 1rem;
  }
  .card-body{
    height: 100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 !important;
  }
  .cards{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    flex-flow: row wrap;
  }
  .mb-2{
    margin: 5rem;
    width: 230px;
    height: 200px;
    border-radius: 1.5rem;
    background-image: url("https://picsum.photos/600/300/?image=25");
    background-size: cover;  
    background-position: center;    
    overflow: hidden;       
  }
  .mb-2::before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(30px);
  }
/* .modal-container{
  display: none;
  background-color: rgba(0,0,0, 0.3);
  opacity: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  position: fixed;
  top:0;
  left: 0;
  height:100vh;
  width:100vh;
}
button {
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,8.2);
  background-color: #47a386;
  font-size: 14px;
  color: white;
  padding: 10px 25px;
  width 50%;
  height:30%;
}

.modal{
  background-color: white;
  border-radius: 5px;
  padding: 30px 50px;
  width: 600px;
  max-width: 100%;
  text-align: center;
} */
</style>