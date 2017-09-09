import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CarouselamosModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
