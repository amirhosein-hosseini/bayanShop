import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SingleShopComponent } from './shop/single-shop/single-shop.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent,
    } 
    ,
    {
        path : "shop",
        component : ShopComponent,
    }
    ,
    { 
        path: 'shop/:productId', 
        component: SingleShopComponent 
    },
    {
        path : "basket",
        component : BasketComponent,
    }
    ,
];
