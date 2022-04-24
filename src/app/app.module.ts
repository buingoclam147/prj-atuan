import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { ProductsComponent } from './products/products.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

registerLocaleData(en);
const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzGridModule,
    NzDropDownModule,
    FontAwesomeModule,
    NzModalModule,
    NzIconModule.forRoot(icons),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
