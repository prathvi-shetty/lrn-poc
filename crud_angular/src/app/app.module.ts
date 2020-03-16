import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponents } from 'app/create/create.component'

const appRoutes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path: 'read', component:ReadComponent},
  {path:'update', component:UpdateComponent},
  {path: 'create', component:CreateComponents},
  {path: 'delete', component:DeleteComponent},
  {path:"",component:LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateComponent,
    DeleteComponent,
    ReadComponent,
    DashboardComponent,
    CreateComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
