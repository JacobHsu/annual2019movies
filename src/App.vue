<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- our main component -->
    <ksvuefp :options="options" :sections="sections">
      <!-- our section component -->
      <ksvuefp-section v-for="(section,index) in sections" :section="section" :key="section.bgColor" :section-index="index" :background-color="section.bgColor">
        <!-- Use Vue-ish way for content animations and transitions. Using !$ksvuefp.slidingActive in v-show will result in content waiting for transitions between sections to finish before animating in -->
        <transition name="fade">
          <h2 v-show="$ksvuefp.canAnimContent(index, true)"> 
            {{ section.content }}
          </h2>
        </transition>    
      </ksvuefp-section>

  </ksvuefp>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
      return {
        sections: [
          {
            bgColor: '#ec407a',
            content: 'I am section 1'
          },
          {
            bgColor: '#42a5f5',
            content: 'I am section 2'
          },
        ],
        options: {
          // Your custom options here
          duration: 800,
          overlay: false
        }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
.ksvuefp-section {
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    color: white;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  opacity: 1;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
