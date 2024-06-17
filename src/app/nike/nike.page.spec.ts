import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NikePage } from './nike.page';

describe('NikePage', () => {
  let component: NikePage;
  let fixture: ComponentFixture<NikePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NikePage],
    });
    fixture = TestBed.createComponent(NikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
