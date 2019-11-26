import { TestBed } from '@angular/core/testing';

import { LocalidadeService } from './localidade.service';

describe('LocalidadeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: LocalidadeService = TestBed.get(LocalidadeService);
        expect(service).toBeTruthy();
    });
});
