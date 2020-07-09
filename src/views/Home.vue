<template>
  <div class="home">
    <div class="destinations">
      <div v-for="destination in destinations" v-bind:key="destination.name">
        <router-link :to="destination.slug">
          <h2>{{destination.name}}</h2>
        </router-link>
        <router-link :to="destination.name">
          <img v-bind:src="require(`@/assets/${destination.image}`)" alt="">
          
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import store from "@/store.js"

export default {
  name: "Home",
  components: {
    
  },
  data(){
    return {destinations: store.destinations};
  }
};
</script>
<style scoped>
img{
  max-width: 150px;
}
a{
  text-decoration: none;
}
.destinations{
  display: flex;
  justify-content: space-around;
}
</style>>

