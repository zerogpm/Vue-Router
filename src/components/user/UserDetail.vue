<template>
    <div>
        <h3>Some User Details</h3>
        <p>Loaded ID: {{ $route.params.id }}</p>
        <router-link :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }" tag="button" class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>
