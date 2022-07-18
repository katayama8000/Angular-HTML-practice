import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcombineComponent } from './testcombine.component';

describe('TestcombineComponent', () => {
  let component: TestcombineComponent;
  let fixture: ComponentFixture<TestcombineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcombineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
