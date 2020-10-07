<template>
  <v-list three-line>
    <template v-for="(item, index) in users">
      <v-list-item :key="item.uid">
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.displayName"></v-list-item-title>
          <v-list-item-subtitle v-html="item.email"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider :key="index" :inset="item.inset"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['users'],
};
</script>

<style></style>
