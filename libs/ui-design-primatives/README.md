# ui-design-primatives

The core set of SCSS used to implement the design system
for this organization. This can be used one of two ways.

1. It can be published to an npm repository such as npm or artifactory.

With this approach the consumer would npm install it and include it using
whatever means they would typically consume third party CSS

2. Lean on NX and Angular CLI to make these styles available through stylePreprocessorOptions

With this approach the angular projects can import/use the files directly

This repo demonstrates approach 2.
