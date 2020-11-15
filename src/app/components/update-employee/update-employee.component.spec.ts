// Load from node_modules
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// Load from src directory
import { UpdateEmployeeComponent } from './update-employee.component';
import { EmployeeService } from '../../services/employee/employee.service';

// Test Case: UpdateEmployeeComponent
describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        ToastrModule.forRoot(),
        HttpClientTestingModule
      ],
      declarations: [ UpdateEmployeeComponent ],
      providers: [EmployeeService, ToastrService]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4 tag', () => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Update Employee');
  });
});
