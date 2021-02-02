

<template>
  <div>
    <router-link to="/" active-class="active"><a>Back</a></router-link>
    <h2>Please fill the form</h2>
    <MastheadForm />
  </div>
</template>

<script>
import Form from "../components/form";
export default {
  components: {
    MastheadForm: Form,
  },
};
</script>

