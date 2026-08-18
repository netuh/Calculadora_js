import Calculadora from './Calculadora';

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test('somar', () => {
    const resultado = calculadora.somar(2, 3);
    expect(resultado).toBe(5);
  });
  
  test('subtrair', () => {
    let resultado = calculadora.subtrair(2, 3);
    expect(resultado).toBe(-1);
    resultado = calculadora.subtrair(2, 2);
    resultado = calculadora.subtrair(4, 2);
    expect(resultado).toBe(2);
  });

  test('multiplicar', () => {
    let resultado = calculadora.mult(2, 3);
    expect(resultado).toBe(6);
  });
});