import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NikeePage } from './nikee.page';

describe('NikeePage', () => {
  let component: NikeePage;
  let fixture: ComponentFixture<NikeePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NikeePage],
    });
    fixture = TestBed.createComponent(NikeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});

