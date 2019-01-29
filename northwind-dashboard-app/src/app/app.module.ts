import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';
import { ViewAllCategoriesComponent } from './components/view-all-categories/view-all-categories.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { CategoryService } from './service/category.service';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './service/user.service';
import { AuthHeaderInterceptor } from './interceptors/auth-header';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MessengerService } from './service/messenger.service';

const routeConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'messenger',
    component: MessengerComponent
  },
  {
    path: 'category',
    component: CategoryHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: ViewAllCategoriesComponent
      },
      {
        path: 'add',
        component: AddNewCategoryComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CategoryHomeComponent,
    ViewAllCategoriesComponent,
    AddNewCategoryComponent,
    LoginComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MessengerService,
    CategoryService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
