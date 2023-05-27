import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilBarbeariaPage } from './perfil-barbearia.page';

describe('PerfilBarbeariaPage', () => {
  let component: PerfilBarbeariaPage;
  let fixture: ComponentFixture<PerfilBarbeariaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilBarbeariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
