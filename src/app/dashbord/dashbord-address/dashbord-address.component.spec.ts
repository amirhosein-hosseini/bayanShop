import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAddressComponent } from './dashbord-address.component';

describe('DashbordAddressComponent', () => {
  let component: DashbordAddressComponent;
  let fixture: ComponentFixture<DashbordAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
