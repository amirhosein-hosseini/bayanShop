import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordOrdersDescriptionComponent } from './dashbord-orders-description.component';

describe('DashbordOrdersDescriptionComponent', () => {
  let component: DashbordOrdersDescriptionComponent;
  let fixture: ComponentFixture<DashbordOrdersDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordOrdersDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordOrdersDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
