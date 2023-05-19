import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FieldsOfLawComponent } from './fields-of-law/fields-of-law.component';
import { PostsComponent } from './posts/posts.component';
import { OfficeComponent } from './office/office.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'fields_of_law',  component: FieldsOfLawComponent },
  { path: 'posts',  component: PostsComponent },
  { path: 'contact', component: ContactComponent   }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    FieldsOfLawComponent,
    PostsComponent,
    OfficeComponent,
    HomeComponent,

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
