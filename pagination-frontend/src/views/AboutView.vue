<template>
  <div id="app">
    <ag-grid-vue
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :pagination="true"
      :paginationPageSize="10"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { AgGridVue } from "@ag-grid-community/vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useItemsStore from "@/store/index";

export default defineComponent({
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const columnDefs = ref([
      { headerName: "ID", field: "id" },
      { headerName: "Name", field: "name" },
    ]);

    const rowData = ref([]);
    const store = useItemsStore();

    onMounted(() => {
      rowData.value = store.items;
    });

    return {
      columnDefs,
      rowData,
    };
  },
});
</script>

<style>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";

#app {
  width: 100%;
  height: 100%;
}
</style>
