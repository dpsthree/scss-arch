/**
 * This file groups together all Wijmo dependencies utilized by
 * the design system. This should not be imported in any location
 * other than design-system.module.ts
 */

import { NgModule } from '@angular/core';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

const componentModuleList = [
  WjInputModule,
];

@NgModule({
  declarations: [],
  imports: componentModuleList,
  exports: componentModuleList
})
export class WijmoDepsModule { }
