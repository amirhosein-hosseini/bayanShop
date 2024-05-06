import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopComponent } from './single-shop.component';

describe('SingleShopComponent', () => {
  let component: SingleShopComponent;
  let fixture: ComponentFixture<SingleShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
