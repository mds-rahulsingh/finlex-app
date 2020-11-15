// Load from node_modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { MyLoaderComponent } from './loader.component';
import { LoaderService } from './../../../services/loader/loader.service';

// Test Case: MyLoaderComponent
describe('MyLoaderComponent', () => {
  let component: MyLoaderComponent;
  let fixture: ComponentFixture<MyLoaderComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoaderComponent ],
      providers: [ LoaderService ]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a span tag', () => {
    fixture = TestBed.createComponent(MyLoaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Please wait...');
  });
});
