The point of this repo is to grow and explore SCSS architecture.

Goals: Establish a layered approach to styling that marries established SCSS practices such as 7-1 organization 
and the use of @use with an awareness of component based web architecture while providing overriding capabilities
with 3rd party libraries.

For this repo initial commits will defer the application of 7-1 until complexity has risen to a level that it is warranted.

This repo will also take advantage of Angular as its web component framework of choice. Wijmo was selected as the
third party UI library with which to provide interop.

Benefits:
	• App
		○ Trivial to consume styled components
		○ If app needs to customize theme at run-time, that is OK
		○ Allows app overrides of default styles through Mixins and functions
		○ Minimal footprint due to build process
		○ App authors are unaware of use of Wijmo
			§ Consolidates documentation to single source (lib authors)
		○ Library layer creates better abstraction for Wijmo Inputs (complete mismatch with form controls)
		○ Demonstrates the idea of layout components
	• Ng Lib
		○ App agnostic
		○ Allows seamless mixing of Wijmo and non-wijmo design elements
	• CSS Lib
		○ Can be used with or without a framework wrapper
			§ Allowing use with Blazor, Vue, React, etc..
		○ Can be used with or without Wijmo
		

Issues:
	• Doesn't tree shake Angular components well
		○ This can be achieved through a different module setup but is more verbose when setting up in app
	• May need to ship a different set of mixins for customization in NG vs Base
	• CSS changes independently of NG Lib. May require closer collaboration in the case that a structural change is made.
