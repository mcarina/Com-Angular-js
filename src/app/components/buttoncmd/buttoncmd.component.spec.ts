import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncmdComponent } from './buttoncmd.component';

describe('ButtoncmdComponent', () => {
  let component: ButtoncmdComponent;
  let fixture: ComponentFixture<ButtoncmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtoncmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtoncmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
