<template>
  <div id="app">
    <img src="./assets/logo.png" @click="sayHi">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    sayHi () {
      console.log('hi')
    }
  },
  data () {
    return {
      msg: 123
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
</style>
