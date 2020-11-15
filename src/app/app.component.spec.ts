// Load from node_modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { AppComponent } from './app.component';

// Test Case: AppComponent
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  // setup after exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
