import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
