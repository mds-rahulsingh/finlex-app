// Load from node_modules
import { RouterModule } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MDBModalService, MDBRootModule } from 'angular-bootstrap-md';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { EmployeeListComponent } from './employee-list.component';
import { SearchService } from './../../services/search/search.service';
import { EmployeeService } from '../../services/employee/employee.service';

// Test Case: EmployeeListComponent
describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        MDBRootModule
      ],
      declarations: [ EmployeeListComponent ],
      providers: [EmployeeService, ToastrService, MDBModalService, SearchService]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4 tag', () => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Employee List');
  });
});
