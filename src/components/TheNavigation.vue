<template>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
    </nav>
</template>

<style scoped>
#nav{
    display: flex;
    justify-content: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}
/* 對應到的a link自動套用顏色 */
#nav a.navigation-active-class {
  color: #42b983;
}
</style>