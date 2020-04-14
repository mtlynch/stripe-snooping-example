<template>
  <div>
    <h1>Load stripe</h1>

    <p>
      This page imports the <span class="code">loadStripe</span> function from the
      <a href="https://www.npmjs.com/package/@stripe/stripe-js"
        >@stripe/stripe-js</a> npm package.
    </p>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';

export default {
  data: function() {
    return {
      loadStripe: loadStripe
    };
  },
};
</script>

<style scoped>
.code {
  font-family: 'Courier New', Courier, monospace;
}
</style>