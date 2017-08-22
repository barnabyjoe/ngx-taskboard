import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/cards.component';
import { DragulaModule } from 'ng2-dragula';
import { ModalComponent } from './modal/modal.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
    {
      path: '',
      component: CardComponent,
      data: { show: 'all' }
    },
    {
      path: 'done',
      component: CardComponent,
      data: { show: 'done' }
    },
    {
      path: 'active',
      component: CardComponent,
      data: { show: 'active' }
    },
    {
      path: 'canceled',
      component: CardComponent,
      data: { show: 'canceled' }
    },
];
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    RouterModule.forRoot(appRoutes)   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
