// Load from node_modules
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// Load from src directory
import { HeaderComponent } from './header.component';
import { SearchService } from '../../../services/search/search.service';

// Test Case: HeaderComponent
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // setup before exceution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ HeaderComponent ],
      providers: [ SearchService]
    })
    .compileComponents();
  }));

  // setup before exceution
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
