<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">My Title</h1>
      <ul>
        <a href="#/">Home</a>
        &nbsp;|&nbsp;
        <a href="#/hello">Hello</a>
      </ul>
    </md-toolbar>
    
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
