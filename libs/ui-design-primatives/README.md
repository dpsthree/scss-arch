# ui-design-primatives

The core set of SCSS used to implement the design system
for this organization. This can be used one of two ways.

1. It can be published to an npm repository such as npm or artifactory.

With this approach the consumer would npm install it and include it using
whatever means they would typically consume third party CSS

2. Lean on NX and Angular CLI to make these styles available through stylePreprocessorOptions

With this approach the angular projects can import/use the files directly

This repo demonstrates approach 2. But there is nothing about the implementation of these styles
that require they be used in an Angular project

# 7-1 pattern
This stand-in design system makes use of the 7-1 SCSS pattern.
However, some elements may be missing

// Abstracts - This would likely appear as the design system grows. At the current
// complexity level it is not warrented.

// Vendors - Third party libs are not checked in. Instead they are included using
// the machinary of choice. In this case, it means a simple @use directive at the
// point of use. We see this with the addition of "overrides"

// Pages - pages are not part of a generic design system. Instead, these may appear
// in the apps SCSS file structure or encoded in the component system of the implementing
// app.

// Themes - Themes was left out as the point of this particular exercise made two
// assumptions. 1. That the point of the theme was to provide a prescriptive look and feel.
// 2. If there was a need to adjust themes based properties; it can be achieved using
// custom CSS properties