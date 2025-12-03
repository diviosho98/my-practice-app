import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidPrinciplePracticeComponent } from './solid-principle-practice.component';

describe('SolidPrinciplePracticeComponent', () => {
  let component: SolidPrinciplePracticeComponent;
  let fixture: ComponentFixture<SolidPrinciplePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidPrinciplePracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolidPrinciplePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
