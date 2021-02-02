<template>
  <div>
    <h1>Mastheads</h1>
    <!-- {{ this.$store.state.mastheadList.mastheads }} -->
    <ul class="masthead-container">
      <li
        class="masthead-wrapper"
        v-for="item in this.$store.state.mastheadList.mastheads"
        :key="item.name"
      >
        <p class="masthead-name">{{ item.name }}</p>
        <p class="masthead-item">{{ item.notes }}</p>
      </li>
    </ul>

    <ul>
      <router-link to="/masthead" active-class="active"
        ><a>Add Masthead</a></router-link
      >
    </ul>
  </div>
</template>

<script>
import { GET_MASTHEADS } from "../store/actions.type";
export default {
  name: "home",

  created() {
    //API FETCH
    this.$store.dispatch(GET_MASTHEADS);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  font-size: 1.4rem;
}

.masthead-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.masthead-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  width: 13rem;
  height: 10rem;
  border: 1px solid black;
  margin: 0.5rem;
}
.masthead-name {
  color: orchid;
  font-size: 2rem;
  font-weight: bold;
}

.masthead-item {
  margin: 0;
}
</style>
