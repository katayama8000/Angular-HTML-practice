import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubComponent } from './test-sub.component';

describe('TestSubComponent', () => {
  let component: TestSubComponent;
  let fixture: ComponentFixture<TestSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
