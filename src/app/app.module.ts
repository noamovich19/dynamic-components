import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import DynamicComponent from './dynamic/dynamic-component';
import {View1Module} from './views/view1/view1.module';
import {View2Module} from './views/view2/view2.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, DynamicComponent, TestComponent ],
  imports: [
    View1Module,
    View2Module,
    BrowserModule,
    FormsModule,
  ],
  providers : [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
