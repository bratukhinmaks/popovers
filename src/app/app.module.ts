import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    PopoverComponent,
    PopoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [PopoverComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
