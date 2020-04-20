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
// Import the loadStripe function from the stripe-js library. Note that we
// never call the loadStripe function; we only save the function pointer.
// Nevertheless, Stripe loads in the background and reports user behavior to
// the Stripe server at https://m.stripe.com/4.
import { loadStripe } from '@stripe/stripe-js';

export default {
  data: function() {
    return {
      loadStripe: loadStripe
    };
  },
};
</script>