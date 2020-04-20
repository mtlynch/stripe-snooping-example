# stripe-snooping-example

## Overview

This is a minimal Vue project that demonstrates Stripe's user surveillance behavior described in the article, ["Stripe is Silently Recording Entire Sessions on Customer Sites."](https://mtlynch.io/stripe-recording-its-customers/)

## Reproducing this behavior

To test this example, run the following on a system with node.js installed:

```
npm install
npm run serve
```

## Remediation

To prevent Stripe from recording your users' behavior, see the [remediation branch](https://github.com/mtlynch/stripe-snooping-example/pull/1/files#diff-6d8c4c1f8080f58cb36a900829a76f43) and the [mitigation section](https://mtlynch.io/stripe-recording-its-customers/#mitigation) of the blog post.
