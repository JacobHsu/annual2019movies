<template>
  <div class="hello">
    <div class="year-switcher">
      <b-nav>
        <b-nav-item @click="changeYear(2019)" :active="year === 2019">2019</b-nav-item>
        <b-nav-item @click="changeYear(2018)" :active="year === 2018">2018</b-nav-item>
      </b-nav>
    </div>
    <ksvuefp :options="options" :sections="sections">
      <ksvuefp-section 
        v-for="(section,index) in sections" 
        :section="section" 
        :key="section.bgColor" 
        :section-index="index" 
        :background-color="section.bgColor"
        :background-image="'url('+ section.bgImg +')'">
          <b-card
            :header="year + '個人評價最高的'"
            :title="section.type"
            header-text-variant="white"
            text-variant="white"
            class="card d-none d-md-block text-right"
            >
             <b-card-text :class="section.type === '動作片' ? 'text-black' : 'text-white'">  
                <h3>{{section.name}}</h3><h4>{{section.title}}</h4>
             </b-card-text>
            <b-card-footer class="text-warning text-right">
                  <font-awesome-icon icon="star"/>
                  <font-awesome-icon icon="star"/>
                  <font-awesome-icon icon="star"/>
                  <font-awesome-icon :icon="['fas', 'star']"/>
                  <font-awesome-icon icon="star" v-if="section.stars === 5"/>
                  <font-awesome-icon icon="star-half-alt" v-if="section.stars === 4.5"/>

                  <span class="rank ml-2">
                      <span v-if="section.imdb!='N/A'">
                        <img border="0" src="../assets/imdb.svg" width="32" height="16">
                        <span class="text-white"> {{section.imdb}} </span>
                      </span> 
                      <span v-if="section.tomatoRating"> 
                          <img border="0" src="../assets/rottentomatoes.svg" width="16" height="16">
                          <span class="text-white"> {{section.tomatoRating}}</span>
                      </span> 
                  </span>
            </b-card-footer>
          </b-card>

          <footer>
            <div class="d-none d-sm-block d-md-none d-flex align-self-end  v-cloak">
                <span class="text-white">{{section.type}}</span>
            </div>
            <div class="d-flex justify-content-center align-self-end  v-cloak">
                <b-nav class="shortlist">
                  <b-nav-item v-for="(list,key) in lists[index]">
                      <a class="nav-link" :href="'https://www.google.com.tw/search?q='+list.title" target="_blank" :title="list.title">
                        <img v-bind:src="list.poster" width="100px" height="150px">
                      </a>
                  </b-nav-item>
                </b-nav>

            </div>
          </footer> 
      </ksvuefp-section>

    </ksvuefp>
  </div>
</template>

<script>
import axios from 'axios';
import { uniq } from 'ramda';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      year: 2019,
      mysections:[],
      sections: [],
      lists: [],
      options: {
        // Your custom options here
        duration: 800,
        overlay: false
      }
    }
  },
  created() {
    this.getList(this.year);
  },
  methods: {
    changeYear(year) {
      this.year = year;
      this.sections = [];
      this.lists = [];
      this.getList(year);
    },
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    async getList (year) {

      const devEnv = process.env.NODE_ENV
      const moviesData = devEnv === "development" ? `../data/${year}movies.json` : `../annual2019movies/data/${year}movies.json`;
      const isMobile = this.isMobile();

      let res  = await axios.get(moviesData)
      .then(response => {
        let thatSections = this.sections;
        let thatList = this.lists;

        let omdbapi = [];
        let sub_omdbapi = [];
        let movies = [];
        let totalMovies = [];
        response.data.forEach(function(movie,id) {
          const apikey = '4e1e08f0';
          let api = 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + movie.title + '&type=movie&tomatoes=true';

          switch(movie.title) {
              case "Eiga: Kakegurui":
                  api = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9552162&plot=full&type=movie&tomatoes=true';
                  break;
              case "Detention":
                  api = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt10805432&plot=full&type=movie&tomatoes=true';
                  break;  
              default:
                  api = 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + movie.title + '&type=movie&tomatoes=true';
          }

          let movieApi = api;
          omdbapi.push(axios.get(movieApi));


          movies.push(movie);

          sub_omdbapi.push([]);
          movie.list.forEach(function(title) {
            totalMovies.push(title);
            let theapi = 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&type=movie&tomatoes=true';

            switch(title) {
                case "Eiga: Kakegurui":
                    theapi = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9552162&plot=full&type=movie&tomatoes=true';
                    break;
                case "Detention":
                    theapi = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt10805432&plot=full&type=movie&tomatoes=true';
                    break; 
                case "Samurai marason":
                    theapi = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9311062&plot=full&type=movie&tomatoes=true';
                    break;    
                case "Stolen Identity":
                    theapi = 'https://www.omdbapi.com/?apikey=4e1e08f0&i=tt8531044&plot=full&type=movie&tomatoes=true';
                    break;
                case "City Hunter":
                    theapi ='https://www.omdbapi.com/?apikey=4e1e08f0&i=tt8523334&plot=full&type=movie&tomatoes=true';
                    break;
                case "Hunting an Internet Killer":
                    theapi ='https://www.omdbapi.com/?apikey=4e1e08f0&i=tt11318602&plot=full&type=movie&tomatoes=true';
                    break;
                case "Hellboy":
                case "EXIT":
                    theapi = 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&type=movie&tomatoes=true&y=2019';
                    break;
                default:
                    theapi = 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&type=movie&tomatoes=true';
            }

            sub_omdbapi[id].push(axios.get(theapi));
          });


         
         
        });

        const total = uniq(totalMovies)
        console.log('total movies:', total.length)

        axios.all(omdbapi).then(axios.spread((...res)=>{
          res.forEach(function(resOmdb, id) {

            movies[id]['imdb'] = resOmdb.data.imdbRating;
            movies[id]['tomatoRating'] = !resOmdb.data.Ratings[1] ? '' : resOmdb.data.Ratings[1].Value;
            
            if(isMobile) { movies[id]['bgImg'] = resOmdb.data.Poster; } 
     
            //thatSections.splice(id, 0, movie_tmps[id]);
            thatSections.push(movies[id]);

            thatList.push([]);

            axios.all(sub_omdbapi[id]).then(axios.spread((...sub_res)=>{
              //console.log("======>"+id, movies[id],sub_res);
              sub_res.forEach(function(sub_resOmdb) {
                //console.warn(sub_resOmdb.data.Title); //Poster
                thatList[id].push({poster:sub_resOmdb.data.Poster,title:sub_resOmdb.data.Title});
              });

            }));
          });
        })).then(
          ()=>{ 
            this.sections = movies;
            this.lists = thatList;
            console.log(thatList)
          }
        );


        
        

      })
      
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.year-switcher {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
.year-switcher .nav-link {
  color: white;
  font-weight: bold;
}
.year-switcher .nav-link.active {
  color: #ffc107;
}
.hello {
  background-color: aqua;
}
.card {
    background: rgba(255,255,255,0.2); 
    top: center;
    left: 6%;
    width: 25rem;
}
footer {
    /* 設定footer的高度 */
    /* background-color: lightgray; */
    height: 30px;
    box-sizing: border-box;
    /* 設定footer絕對位置在底部 */
    position: absolute;
    bottom: -50%;
    /* 展開footer寬度 */
    width: 100%;
}

@media screen and (max-width: 992px) {
  .shortlist {
    visibility: hidden;
  }
  .mobile-section-type {
    visibility: show;
  }
}
</style>
