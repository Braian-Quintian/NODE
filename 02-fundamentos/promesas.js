const empleados = [
    {
        id: 1,
        nombre: "Braian",
    },
    {
        id: 2,
        nombre: "Linda",
    },
    {
        id: 3,
        nombre: "Karen",
    },
];
const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id);
        empleado ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id);
        salario ? resolve(salario.salario) : reject(`Salario con id ${id} no existe`);
    });
};

const id = 2;

getEmpleado(id)
    .then((empleado) => {
        return getSalario(id)
            .then((salario) => {
                console.log(`El empleado ${empleado.nombre} existe y tiene un salario de ${salario}`);
            })
            .catch((err) => {
                console.log(err);
            });
    })

// .then((empleado) => {
//     return getSalario(id)
//         .then((salario) => {
//             console.log(`El empleado ${empleado.nombre} existe y tiene un salario de ${salario}`);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })
// .catch((err) => {
//     console.log(err);
// });
