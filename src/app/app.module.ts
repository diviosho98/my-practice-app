import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SolidPrinciplePracticeComponent } from './solid-principle-practice/solid-principle-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    SolidPrinciplePracticeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  // Export the component so editors/Angular Language Service can resolve
  // the tag when templates are analyzed outside the module context.
  exports: [SolidPrinciplePracticeComponent]
})
export class AppModule {}
