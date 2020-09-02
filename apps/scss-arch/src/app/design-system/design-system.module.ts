/**
 * This file is the entry point for the stand in enterprise
 * design system. This design system is supposed to represent the
 * common desire for enterprise organization for "wrapper" controls
 * that encode their specific visuals and behavioral adjustments to
 * native and third party controls.
 *
 * This module should encapsulate and abstract away Wijmo. However,
 * since Wijmo ships most of their visuals as an indivdual css file,
 * this can only encapsulate the Angular components themselves.
 * Additional works is needed at the global scss level to finish the
 * encapsulation.
 *
 * This is where you register and export components such as, "my-org-button"
 *
 * In a larger environment or a monorepo such as NX, this file would typically
 * serve as the entry point into a custom Angular library.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WijmoDepsModule } from './wijmo-deps/wijmo-deps.module';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ComboBoxComponent, HeaderComponent],
  imports: [
    CommonModule,
    WijmoDepsModule
  ],
  exports: [ComboBoxComponent, HeaderComponent]
})
export class DesignSystemModule { }
