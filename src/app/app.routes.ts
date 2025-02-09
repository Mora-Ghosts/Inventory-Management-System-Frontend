import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AddCatagoryComponent } from './components/add-catagory/add-catagory.component';
import { AddTransactionTypeComponent } from './components/add-transaction-type/add-transaction-type.component';
import { AddProductTypeComponent } from './components/add-product-type/add-product-type.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { ViewCategoryTypeComponent } from './components/view-category-type/view-category-type.component';
import { ViewStockComponent } from './components/view-stock/view-stock.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import {ViewProductTypeComponent} from './components/view-product-type/view-product-type.component';

export const routes: Routes = [
    {//Analytics : Dashboards
        path:'',
        component:HeroComponent
    },
    {//Form
        path:'add-catagories',
        component:AddCatagoryComponent
    },
    {//Form  -- This will be useless --
        path:'add-transaction-types',
        component:AddTransactionTypeComponent
    },
    {//Form
        path:'add-product-types',
        component:AddProductTypeComponent
    },
    {//Form
        path:'add-stocks',
        component:AddStockComponent
    },
    {//Form
        path:'add-transactions',
        component:AddTransactionComponent
    },
    {//For Edit, Update, Delete  --> catagories
        path:'view-category-types',
        component:ViewCategoryTypeComponent
    },
    {//For Edit, Update, Delete  --> product types
      path:'view-product-types',
      component:ViewProductTypeComponent
    },
    {//For Edit, Update, Delete
        path:'view-stocks',
        component:ViewStockComponent
    },
    {//For Edit, Update, Delete
        path:'view-transactions',
        component:ViewTransactionsComponent
    },
];
