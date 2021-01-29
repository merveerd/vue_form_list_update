<template>
  <div>
    <h1>Masthead</h1>
    {{ this.$store.state.mastheadList.mastheads }}
    <ul class="masthead-container">
      <li
        class="masthead-wrapper"
        v-for="item in this.$store.state.mastheadList.mastheads"
        :key="item.name"
      >
        {{ item.name }}
        {{ item.notes }}
      </li>
    </ul>

    <ul>
      <router-link to="/masthead" tag="li" active-class="active"
        ><a>Add Masthead</a></router-link
      >
    </ul>
  </div>
</template>

<script>
import { GET_MASTHEADS } from "../store/actions.type";
export default {
  name: "home",
  props: {
    msg: String,
  },

  data() {
    return {
      items: {},
    };
  },
  created() {
    //API FETCH
    this.$store.dispatch(GET_MASTHEADS);
  },

  mounted() {
    console.log("home 2");
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

.masthead-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
</style>
