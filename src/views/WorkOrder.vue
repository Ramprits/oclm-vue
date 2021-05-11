<template>
  <div v-if="loading">
    Please await a moment
  </div>
  <OrderTable
    v-else
    :orders="workOrders"
  />
</template>

<script>
import { mapGetters } from "vuex";
import OrderTable from "@/components/WorkOrderTable.vue";
export default {
    components: { OrderTable },
    computed: { ...mapGetters("orders", ["workOrders", "loading"]) },
    mounted() {
        return this.$store.dispatch("orders/getOrders");
    }
};
</script>

<style></style>
