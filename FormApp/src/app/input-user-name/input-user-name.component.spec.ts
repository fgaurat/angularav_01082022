import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUserNameComponent } from './input-user-name.component';

describe('InputUserNameComponent', () => {
  let component: InputUserNameComponent;
  let fixture: ComponentFixture<InputUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUserNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
