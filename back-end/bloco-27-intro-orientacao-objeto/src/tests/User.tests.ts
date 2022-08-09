import { expect } from 'chai';

describe('Testes do Book', () => {
    describe('Ao instanciar um novo Book', () => {
        const model = new User();
        it('conseguimos instanciar com sucesso', () => {
            expect(model).to.be.instanceOf(User)
        })
        it('conseguimos verificar suas propriedades', () => {
            expect(model).to.haveOwnProperty('name');
        })
    })
})