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
        empleado ? resolve(empleado.nombre) : reject(`Empleado con id ${id} no existe`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id);
        salario ? resolve(salario.salario) : reject(`Salario con id ${id} no existe`);
    });
};

const id = 2;


const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id).then(msg => console.log(msg)).catch(err => console.log(err));