<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/stripe">Load stripe</router-link> |
      <a href="https://github.com/mtlynch/stripe-snooping-example">Github</a>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
}

a {
  text-decoration: none;
}

.code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 11pt;
}
</style>
