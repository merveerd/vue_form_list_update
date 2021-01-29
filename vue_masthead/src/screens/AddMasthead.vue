

<template>
  <div>
    <router-link to="/" tag="li" active-class="active"><a>Back</a></router-link>
    <h2>Please fill the form</h2>

    <div class="container">
      <h1 class="title">Masthead Information</h1>

      <form
        class="formContainer"
        name="mastheadInfo"
        @submit.prevent="addMasthead(name, gTag, notes)"
      >
        <label class="form-label" for="name"> Name: </label>
        <input class="form-field" autocomplete="off" v-model="name" />
        <label class="form-label" for="gTag"> g-tag: </label>
        <input class="form-field" v-model="gTag" autocomplete="off" />
        <label class="form-label" for="notes"> Notes: </label>
        <textarea
          class="form-field"
          autocomplete="off"
          v-model="notes"
        ></textarea>
        <input class="form-button" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { ADD_MASTHEAD } from "../store/actions.type";
export default {
  data() {
    return {
      name: "",
      gTag: "",
      notes: "",
    };
  },
  created() {},

  mounted() {},

  methods: {
    addMasthead(name, gTag, notes) {
      this.$store.dispatch(ADD_MASTHEAD, { name, gTag, notes });
      this.name = "";
      this.gTag = "";
      this.notes = "";
    },
  },
};
</script>

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
</style>
