<template>
  <table class="table is-bordered">
    <thead>
      <th>Customer</th>
      <th>Description</th>
      <th>Category</th>
      <th>Status</th>
    </thead>
    <tbody>
      <tr v-for="o in orders" :key="o.id">
        <td>{{ o.customer.name }}</td>
        <td>{{ o.description.substr(0, 80) }}</td>
        <td>{{ o.category.name }}</td>
        <td>{{ o.status.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["orders"],
};
</script>

<style></style>
