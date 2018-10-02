<template>
    <div>
        <h3>Edit the User</h3>
        <p>Edit User ID: {{ $route.params.id }}</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>value: {{ $route.query.q }}</p>
        <div style="height: 700px"></div>
        <p id="data">some extra Data</p>
    </div>
</template>

<script>
  export default {
    name: "UserEdit"
  }
</script>

<style scoped>

</style>
