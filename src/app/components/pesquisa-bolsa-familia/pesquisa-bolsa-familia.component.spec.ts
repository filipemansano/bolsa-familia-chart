import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaBolsaFamiliaComponent } from './pesquisa-bolsa-familia.component';

describe('PesquisaBolsaFamiliaComponent', () => {
    let component: PesquisaBolsaFamiliaComponent;
    let fixture: ComponentFixture<PesquisaBolsaFamiliaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PesquisaBolsaFamiliaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PesquisaBolsaFamiliaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
