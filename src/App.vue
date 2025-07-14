<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Table Prototype</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Country', value: 'country' },
      ],
      items: [
        { name: 'Alice', age: 25, country: 'USA' },
        { name: 'Bob', age: 30, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
      ],
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>