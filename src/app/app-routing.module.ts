import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes =[
  {path:'home', component:HomeComponent, title:"Home - Mo's bot "},
  {path:'catalog', component:CatalogComponent, title:"Catalog - Mo's bot "}, // (/:filter) the colon signals to the angular routerr that this part of the URL path will actually be a route parameter 
  {path:'cart', component:CartComponent, title:"Cart - Mo's bot "},
  {path:'', redirectTo:'/home', pathMatch:'full'}
  


];  //we'll use this arry to difine our routes

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule] //routes are basically just objexts that map a url to a component
})
export class AppRoutingModule { }
