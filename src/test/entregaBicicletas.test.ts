import { contarBicicletasParaEntrega } from '../app';

describe('contarBicicletasParaEntrega', () => {
  test('debería devolver la cantidad correcta de bicicletas', () => {
    const pesosPaquetes = [5, 3, 2, 5, 6, 1, 4, 7, 9];
    const N = 10;
    expect(contarBicicletasParaEntrega(pesosPaquetes, N)).toBe(4);
  });

  test('debería devolver 0 si no hay pares que sumen N', () => {
    const pesosPaquetes = [1, 2, 3];
    const N = 10;
    expect(contarBicicletasParaEntrega(pesosPaquetes, N)).toBe(0);
  });

  test('debería manejar una lista vacía de paquetes', () => {
    const pesosPaquetes: number[] = [];
    const N = 10;
    expect(contarBicicletasParaEntrega(pesosPaquetes, N)).toBe(0);
  });
});
