import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Services } from './services';
import { ServicesSubMenu } from './services-sub-menu/services-sub-menu';
import { MockServicesSubMenu } from '@mock/mock-services-sub-menu';

describe('Services Component', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
    })
      .overrideComponent(Services, {
        remove: { imports: [ServicesSubMenu] },
        add: { imports: [MockServicesSubMenu] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Services);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Services"', () => {
    expect(component.pageSubtitle).toBe('Services');
  });
});
