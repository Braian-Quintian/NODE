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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);
    empleado ? callback(null, empleado) : callback(`Empleado con id ${id} no existe`);
};

const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id === id);
    salario ? callback(null, salario) : callback(`Salario con id ${id} no existe`);
};

let id = 3;
getEmpleado(id, (err, empleado) => {
    err
        ? (console.log("ERROR!"), console.log(err))
        : getSalario(id, (err, salario) =>
            err
                ? (console.log("ERROR!"), console.log(err))
                : console.log(`El empleado ${empleado.nombre} existe y tiene un salario de ${salario.salario}`)
        );
});
