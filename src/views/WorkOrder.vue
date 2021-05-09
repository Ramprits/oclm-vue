<template>
  <div v-if="loading">
    Please await a moment
  </div>
  <OrderTable v-else :orders="workOrders"></OrderTable>
</template>

<script>
import { mapGetters } from "vuex";
import OrderTable from "@/components/WorkOrderTable.vue";
export default {
  components: { OrderTable },
  mounted() {
    return this.$store.dispatch("orders/fetchWorkOrders");
  },
  computed: { ...mapGetters("orders", ["workOrders", "loading"]) },
};
</script>

<style></style>
