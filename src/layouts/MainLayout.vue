<template>
  <section>
    <Header />

    <main class="main">
      <slot />
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header/Header';

export default {
  components: {
    Header,
  },
  created() {},
};
</script>

<style></style>
