<template>
    <div>
        <h3>Edit the User</h3>
        <p>Edit User ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>value: {{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">some extra Data</p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next();
      } else {
        if (confirm('Are you sure?')) {
          next()
        } else {
          next(false);
        }
      }
    }
  }
</script>

<style scoped>

</style>
