
'use strict'

const conversor = require('./nascimento_em_dias');

describe('test', () => {
    it('should test soma', () => {
        const retorno = conversor.soma(1, 7);
        expect(retorno).toBe(8);
    });
    it('should test subtracao', () => {
        const retorno = conversor.subtracao(1, 7);
        expect(retorno).toBe(-6);
    });
});
