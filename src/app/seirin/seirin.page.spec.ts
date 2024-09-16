import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeirinPage } from './seirin.page';

describe('SeirinPage', () => {
  let component: SeirinPage;
  let fixture: ComponentFixture<SeirinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeirinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
