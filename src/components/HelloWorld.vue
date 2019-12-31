<template>
  <div class="hello">
    <ksvuefp :options="options" :sections="sections">
      <ksvuefp-section 
        v-for="(section,index) in sections" 
        :section="section" 
        :key="section.bgColor" 
        :section-index="index" 
        :background-color="section.bgColor"
        :background-image="'url('+ section.bgImg +')'">
          <b-card
            header="2019個人評價最高的"
            :title="section.type"
            header-text-variant="white"
            text-variant="white"
            class="card d-none d-lg-block text-right"
            >
             <b-card-text class="text-white">  
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
                        <svg id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
                        <span class="text-white"> {{section.imdb}} </span>
                      </span> 
                      <span v-if="section.tomatoRating"> 
                          <img border="0" src="https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png" width="16" height="16">
                          <span class="text-white"> {{section.tomatoRating}}</span>
                      </span> 
                  </span>
            </b-card-footer>
          </b-card>


          <footer>
            <div class="d-flex justify-content-center align-self-end  v-cloak">
              <b-nav>
                <b-nav-item v-for="(list,key) in lists[index]">
                    <a class="nav-link" :href="'https://www.google.com.tw/search?q='+list.title" target="_blank" :title="list.title">
                      <img v-bind:src="list.poster" width="100px" height="150px">
                    </a>
                </b-nav-item>
              </b-nav>
              <!-- <ul class="nav" >
                  <li class="nav-item" v-for="(list,key) in lists[index]">
                    <a class="nav-link" :href="'https://www.google.com.tw/search?q='+list.title" target="_blank" :title="list.title">
                      <img v-bind:src="list.poster" width="100px" height="150px">
                    </a>
                  </li>
                </ul> -->
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
      mysections:[],
      sections: [
        // {
        //   bgColor: '#ec407a',
        //   content: 'I am section 1'
        // },
        // {
        //   bgColor: '#42a5f5',
        //   content: 'I am section 2'
        // },
      ],
      lists: [],
      options: {
        // Your custom options here
        duration: 800,
        overlay: false
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList () {
      const devEnv = process.env.NODE_ENV
      const moviesData = devEnv === "development" ? '../data/movies.json' : '../annual2019movies/data/movies.json';

      let res  = await axios.get(moviesData)
      .then(response => {
        let thatSections = this.sections;
        let thatList = this.lists;
console.log(123, response.data)
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
      
    },
    api1: function(title) {
      console.log(111, title);
      const apikey = '4e1e08f0';
      return 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&type=movie&tomatoes=true';
      // switch(title) {
      //     case "More Than Blue":
      //         return 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&y=2018&type=movie&tomatoes=true';
      //         break;     
      //     default:
      //         //https://www.omdbapi.com/?apikey=4e1e08f0&t=
      //         return 'https://www.omdbapi.com/?'+'apikey='+apikey+'&t=' + title + '&type=movie&tomatoes=true';
      // }
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
.hello {
  background-color: aqua;
}
.card {
    background: rgba(255,255,255,0.2); 
    top: center;
    left: 6%;
    width: 30rem;
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
</style>
