<template>
  <main id="app">
    <nav class="nav">
      <ul class="nav-links">
        <li>  <router-link class="nav-link" to="/">Home</router-link> </li>
        <li>  <router-link class="nav-link" to="/front">Front</router-link> </li>
        <li>  <router-link class="nav-link" to="/back">Back</router-link> </li>
        <li>  <router-link class="nav-link" to="/other">Other</router-link> </li>
      </ul>
    </nav>
    <b-container>
     <router-view/>
    </b-container>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul, li {
  margin : 0;
}

.nav {
  background-color: beige;
  display: flex;
  justify-content: center;
  

  &-links {
    list-style-type: none;
    display: flex;
      text-align: center;
  } 

  &-link {
    font-size: 1.2em;
    font-weight: bold;
    color: #2c3e50;
    padding: 1.3rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
