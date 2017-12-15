import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import DynamicComponent from './dynamic/dynamic-component';
import {View1Module} from './views/view1/view1.module';
import {View2Module} from './views/view2/view2.module';
import {TestComponent} from './test/test.component';
import {RouterModule} from '@angular/router';
import {NodeComponent} from './node/node.component';

@NgModule({
  declarations: [AppComponent, DynamicComponent, TestComponent, NodeComponent],
  imports: [
    View1Module,
    View2Module,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'node/:id', component: NodeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
