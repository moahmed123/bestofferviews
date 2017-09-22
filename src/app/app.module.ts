//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

//components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppContentComponent } from './content/app-content.component';

//services
import { BrandService } from './services/brand.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ BrandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
