<template>
  <div class="hello">
    <h1>Masthead</h1>

    <ul>
      <router-link to="/masthead" tag="li" active-class="active"
        ><a>Login Infos</a></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
