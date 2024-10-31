import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormatPipe } from './pipes/format.pipe';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    HighlightDirective,
    FormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HighlightDirective,
    FormatPipe
  ]
})
export class SharedModule { }
