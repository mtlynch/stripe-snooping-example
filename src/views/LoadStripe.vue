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
// Import loadStripe using the /pure import path so that the import has no side
// effects.
import { loadStripe } from '@stripe/stripe-js/pure';

// Replace this with your app's Stripe publishable key.
const STRIPE_PUBLISHABLE_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx';

export default {
  data: function() {
    return {
      stripe: null,
    };
  },
  mounted() {
    loadStripe(STRIPE_PUBLISHABLE_KEY).then(stripe => {
      this.stripe = stripe;
      // TODO: Use the Stripe library here.
    });
  },
  beforeRouteLeave(to) {
    // Force an HTTP request instead of a JavaScript route change because we need
    // a new page load that does *not* import Stripe.
    window.location.replace(to.path);
  }
};
</script>