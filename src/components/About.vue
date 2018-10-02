<template>
    <div>
        <h1>About Us</h1>
        <p>We are software company</p>
        <button class="btn btn-primary" @click="backHome">Back to home</button>
    </div>
</template>

<script>
  export default {
    methods: {
      backHome () {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style scoped>

</style>
