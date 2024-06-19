import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidosComponent } from './vestidos.component';

describe('VestidosComponent', () => {
  let component: VestidosComponent;
  let fixture: ComponentFixture<VestidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestidosComponent]
    });
    fixture = TestBed.createComponent(VestidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
