<template>
  <InfoLayout>
    <v-app>
      <v-main>
        <v-container  >
          <p>Email verification success</p>
          <router-link to="/">to main page</router-link>
        </v-container>
      </v-main>
    </v-app>
  </InfoLayout>
</template>

<script>
import InfoLayout from '@/layouts/InfoLayout';

export default {
  comments: {
    InfoLayout,
  },
};
</script>

<style>

</style>
