const { crearArchivo } = require('./helpers/multiplicar');
process.stdin.setEncoding('utf8');
process.stdout.write('Ingrese un número base: ');
let base;
let hasta;
let listar;
let step = 1;
process.stdin.on('data', (input) => {
    input = input.trim();
    step === 1
        ? ((base = parseInt(input)), process.stdout.write('Ingrese un número hasta: '), step++)
        : step === 2
            ? ((hasta = parseInt(input)), process.stdout.write('¿Desea listar la tabla? (s/n): '), step++)
            : step === 3 &&
            ((listar = input.toLowerCase().trim() === 's'),
                isNaN(base) || isNaN(hasta) || base < 0 || hasta < 0 || (input !== 's' && input !== 'n')
                    ? (console.log('Entrada no válida. Por favor, ingrese valores válidos.'), process.exit(1))
                    : crearArchivo(base, listar, hasta)
                        .then((mensaje) => {
                            console.log(mensaje);
                            process.exit(0);
                        })
                        .catch((error) => {
                            console.log(error);
                            process.exit(1);
                        }));
});