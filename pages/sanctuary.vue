<template>
    <div class="contaiiner containerSanctuary">
      <div class="overflow-auto">
       <h1 class="mt-3">Sanctuaires</h1>
        <div class="cards">
          <div class="my-table" 
            :per-page="perPage"
            :current-page="currentPage" 
            :key="index"
            v-for="(sanctuaire, index) in currentPageSanctuaries">
              <b-card
                img-top
                tag="article"
                style="max-width: 20rem; margin:0px; padding:0px; "
                class="mb-2"
                :sanctuaryData="sanctuaryData"
              >
              <div></div>
             <img v-bind:src="`${sanctuaire.imgSanctuary}`" class="imgCard" />
              <b-card-text>
                {{sanctuaire.nameSanctuary}} 
              </b-card-text>

                <input type="button" class="btn btn-success btn-xs" @click="myModal=true" value="Description" />

                <div v-if="myModal">
                  <transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" @click="myModal=false"> <span aria-hidden="true">&times;</span>
                              </button>
                              <h4 class="modal-title">{{sanctuaire.nameSanctuary}}</h4>
                              <div class="modal-body">
                                <div>
                                  <b-carousel
                                    id="carousel-fade"
                                    style="text-shadow: 0px 0px 2px #000"
                                    fade
                                    indicators
                                    img-width="60%"
                                    img-height="40%"
                                  >
                                    <b-carousel-slide
                                      img-src="https://picsum.photos/1024/480/?image=10"
                                    ></b-carousel-slide>
                                    <b-carousel-slide
                                      img-src="https://picsum.photos/1024/480/?image=12"
                                    ></b-carousel-slide>
                                    <b-carousel-slide
                                      img-src="https://picsum.photos/1024/480/?image=22"
                                    ></b-carousel-slide>
                                  </b-carousel>
                                </div>
                                <div class="form-group">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </transition>
                </div>
            
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
  export default {
  transition: 'slide-bottom',
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        PageSanctuarie: {},
        totalRows: this.animalsData,
        nbPages:0,
        sanctuaryData : [],
        myModal : false,
        titleModal: '',
        descModal: '',
      }
    },
        async fetch() {
       this.sanctuaryData  =  await fetch('http://localhost/ctrlsanctuary.php',)
        .then(res => res.json())
        // .then(res => console.log(res))
    },
    methods : {
      openModal() {
        this.myModal = true;
      // this.titleModal = ;
      }
    }, 
    computed: {
      rows() {
        return this.sanctuaryData.length 
      },
      
      pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
      
      currentPageSanctuaries() {
      let lengthAll =this.sanctuaryData.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
      this.PageSanctuarie[this.nbPages] = this.sanctuaryData.slice(
      i,
      i + this.perPage
      );
      this.nbPages++;
      }
      return this.PageSanctuarie[this.currentPage-1];
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
  .containerSanctuary{
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
    width: 270px;
    height: 240px;
    border-radius: 1.5rem;
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
  .imgCard {
     width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  .card-text{
    text-align: center;
    position: absolute;
    color: rgba(231, 231, 231, 0.733);
  }

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-header{
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.btn {
  position: absolute;
}
.btn-success{
  margin-top: 5.5rem;
}

</style>