import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ApiService } from './services/api.service';
import { HeroComponent } from './components/hero/hero.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { NavbarServices } from './services/navbar.service';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { IconsProviderModule } from './icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DocenteModule } from './docente/docente.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { NgZorroAntdModule } from './ngZorroAntdModule';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinnerService } from './services-interceptor/spinner.service';
import { InterceptorService } from './services-interceptor/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    DocenteModule,
    NgxSpinnerModule.forRoot()
    
  ],
  exports: [],
  providers: [ApiService, NavbarServices,spinnerService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
