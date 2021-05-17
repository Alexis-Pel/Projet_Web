<template>
    <div class="contaiiner containerArmor">
      <div class="overflow-auto">
        
        <p class="mt-3"></p>

        <!-- <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
        ></b-table> -->
        <div class="cards">
          <div id="my-table" 
            :per-page="perPage"
            :current-page="currentPage" 
            :key="index"
            v-for="(item, index) in currentPageItems"
            >
              <b-card
            
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; margin:0px; padding:0px;"
                class="mb-2"
                :items="items"
              >
              
              <b-card-text>
                {{item.first_name}}
                {{item.last_name}} 
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
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
    // templ() { `<div>
    //     <b-card
    //     title="Card Title"
    //     img-src="https://picsum.photos/600/300/?image=25"
    //     img-alt="Image"
    //     img-top
    //     tag="article"
    //     style="max-width: 20rem;"
    //     class="mb-2"
    //     >
    //     <b-card-text>
    //     Some quick example text to build on the card title and make up the bulk of the card's content.
    //     </b-card-text>

    //     <b-button href="#" variant="primary">Go somewhere</b-button>
    //     </b-card>
    //   </div> `},
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone griigi' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubblelion' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone WSell' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'Fredasdd', last_name: 'A' },
          { id: 11, first_name: 'Wilasdasma', last_name: 'B griigi' },
          { id: 12, first_name: 'BarfgdgWEQEEney', last_name: 'X' },
          { id: 13, first_name: 'DSA', last_name: 'FSA' },
          { id: 14, first_name: 'Pebghfghbles', last_name: 'SADASD WSell' },
          { id: 15, first_name: 'Bambcvbm Bamm', last_name: 'GTRER' },
          { id: 16, first_name: 'Therete Great', last_name: 'HFRGHF' },
          { id: 17, first_name: 'Rockghdfgerhead', last_name: 'SlaRWERWte' },
          { id: 18, first_name: 'Peangfrl', last_name: 'HRTYRT' },
        ],
        pageItem: {},
        totalRows: this.items,
        //currentPageIndex:0,
        nbPages:0,
      }
    },
    computed: {
      rows() {
        return this.items.length 
      },
      
      pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
      
      currentPageItems() {
      let lengthAll =this.items.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
      this.pageItem[this.nbPages] = this.items.slice(
      i,
      i + this.perPage
      );
      this.nbPages++;
      }
      return this.pageItem[this.currentPage-1];
      }


    },
    methods: {

      }
  }
</script>

<style scoped>
.containerArmor{
    background-color: #fff;
}

#my-table{
  display:flex;
  flex-flow: row wrap;
  justify-content:center;
  padding: 0;
}
.cards{
  display:flex;
  justify-content: center;
  align-items: center;
}
.mb-2{
  margin: 0;

}
</style>