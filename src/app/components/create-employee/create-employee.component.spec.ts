// Load from node_modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { CreateEmployeeComponent } from './create-employee.component';

// Test Case: CreateEmployeeComponent
describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4 tag', () => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Create Employee');
  });
});
