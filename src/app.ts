export const contarBicicletasParaEntrega = (pesos: number[], N: number): number => {
    // Paso 1: Ordenar la lista de pesos
    pesos.sort((a, b) => a - b);

    // Paso 2: Inicializar punteros y contador de bicicletass
    let inicio = 0;
    let fin = pesos.length - 1;
    let bicicletas = 0;

    // Paso 3: Búsqueda de dos punteros
    while (inicio < fin) {
        const suma = pesos[inicio] + pesos[fin];
        if (suma === N) {
            // Encontramos un par, incrementamos el contador y ajustamos los punteros
            bicicletas++;
            inicio++;
            fin--;
        } else if (suma < N) {
            // Si la suma es menor, movemos el puntero de inicio hacia adelante
            inicio++;
        } else {
            // Si la suma es mayor, movemos el puntero de fin hacia atrás
            fin--;
        }
    }

    return bicicletas;
}

// Ejemplo de uso
const pesosPaquetes = [5, 3, 2, 5, 6, 1, 4, 7, 9];
const N = 10;
console.log(`${contarBicicletasParaEntrega(pesosPaquetes, N)} package pairs`); // Debería mostrar 4