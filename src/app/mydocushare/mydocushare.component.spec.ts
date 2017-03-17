import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocushareComponent } from './mydocushare.component';

describe('MydocushareComponent', () => {
  let component: MydocushareComponent;
  let fixture: ComponentFixture<MydocushareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydocushareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydocushareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
