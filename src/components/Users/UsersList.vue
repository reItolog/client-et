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

        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          :data-id="item.uid"
          @click="handleDetail($event)"
        >
          <v-icon dark>
            mdi-eye
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          :data-id="item.uid"
          @click="handleDelete($event)"
        >
          <v-icon dark>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-list-item>

      <v-divider :key="index" :inset="item.inset"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['users'],
  methods: {
    ...mapActions(['getUserById']),
    handleDelete(event) {
      const id = event.currentTarget.dataset.id;
      console.log(id);
    },
  },
  created() {},
};
</script>

<style>
</style>