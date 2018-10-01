<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
        <p>Loaded ID: {{ id }}</p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push('/')
      }
    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>
