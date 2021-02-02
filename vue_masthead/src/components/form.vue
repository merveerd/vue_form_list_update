<template>
  <div class="container">
    <h1 class="title">Masthead Information</h1>

    <form
      class="formContainer"
      name="mastheadInfo"
      @submit.prevent="addMasthead(name, gTag, notes)"
    >
      <label class="form-label" for="name"> Name: </label>
      <input class="form-field" v-model="name" />
      <label class="form-label" for="gTag"> g-tag: </label>
      <input class="form-field" v-model="gTag" />
      <label class="form-label" for="notes"> Notes: </label>
      <textarea class="form-field" v-model="notes"></textarea>
      <input
        class="form-button"
        type="submit"
        value="Submit"
        v-on:keypress.enter="addMasthead(name, gTag, notes)"
      />
    </form>
  </div>
</template>
<script>
import { ADD_MASTHEAD } from "../store/actions.type";
export default {
  name: "masthead-form",

  data() {
    return {
      name: "",
      gTag: "",
      notes: "",
    };
  },

  methods: {
    addMasthead(name, gTag, notes) {
      this.$store.dispatch(ADD_MASTHEAD, { name, gTag, notes });
      this.name = "";
      this.gTag = "";
      this.notes = "";

      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 2rem;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
}
.form-field {
  font-size: 1.4rem;
}

.form-button {
  width: 10%;
  margin-top: 2%;
  background-color: paleturquoise;
}

a {
  color: #42b983;
  font-size: 1.4rem;
}
</style>
