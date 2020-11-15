// Load from node_modules
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MDBModalService, MDBRootModule } from 'angular-bootstrap-md';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { ProfileFormComponent } from './profile-form.component';
import { SearchService } from './../../../services/search/search.service';
import { EmployeeService } from '../../../services/employee/employee.service';

// Test Case: ProfileFormComponent
describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent;
  let fixture: ComponentFixture<ProfileFormComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        MDBRootModule
      ],
      declarations: [ ProfileFormComponent ],
      providers: [EmployeeService, ToastrService, MDBModalService, SearchService, FormBuilder]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a button tag', () => {
    fixture = TestBed.createComponent(ProfileFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  });
});
