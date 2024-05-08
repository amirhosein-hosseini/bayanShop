import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordOrdersComponent } from './dashbord-orders.component';

describe('DashbordOrdersComponent', () => {
  let component: DashbordOrdersComponent;
  let fixture: ComponentFixture<DashbordOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
