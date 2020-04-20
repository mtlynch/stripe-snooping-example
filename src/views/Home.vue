<template>
  <div class="home">
    <h1>Stripe Snooping Example App (Mitigated)</h1>

    <p>
      This is a branch that demonstates how to mitigate Stripe's snooping
      behavior.
    </p>

    <p>
      If the mitigation works, you should only see requests to the
      Stripe URL
      (<span class="code">https://m.stripe.com/4</span>) when you're on the
      <router-link to="/stripe"><span class="code">/stripe</span></router-link>
      route.
    </p>

  </div>
</template>

<style scoped>

</style>
