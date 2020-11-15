// Load from node_modules
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Load from src directory
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MyLoaderComponent } from './components/shared/loader/loader.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProfileFormComponent } from './components/shared/profile-form/profile-form.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
// Load services from src directory
import { LoaderService } from './services/loader/loader.service';
import { SearchService } from './services/search/search.service';
import { EmployeeService } from './services/employee/employee.service';
import { LoaderInterceptorService } from './services/loader-interceptor/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileFormComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    SearchService,
    LoaderService,
    EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
