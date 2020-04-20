<template>
  <div class="home">
    <h1>Stripe Snooping Example App</h1>

    <p>
      This is a minimal Vue web app that demonstrates Stripe's user
      surveillance behavior described in the article,
      <a
        href="https://mtlynch.io/stripe-recording-its-customers/"
        >"Stripe is Silently Recording Entire Sessions on Customer Sites."</a>
    </p>

    <h2>To reproduce</h2>

    <p>
      To verify this behavior, open up your browser's Developer Tools (usually
      accessible via the F12 key), and view the "Network" tab:</p>

    <img alt="Stripe requests in Chrome network tab" style="border: 1px solid grey; max-width: 100%" src="../assets/stripe-network-tab.png">
      
    <p>You should see the app generate new requests to the URL
      <span class="code">https://m.stripe.com/4</span> every time you view a
      different page in this app.
    </p>

    <h2>Mitigation</h2>

    <p>
      To mitigate this behavior in your apps, see the 
      <a
        href="https://mtlynch.io/stripe-recording-its-customers/#mitigation"
        >mitigation section of the blog post</a> or take a look at the
      <a href="">
        <span class="code">mitigation</span> branch</a> of this project's Github
      repo.
    </p>
  </div>
</template>

<style scoped>

</style>
