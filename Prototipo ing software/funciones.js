document.getElementById('formAgregarTrabajador').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const tipoTrabajador = document.getElementById('tipoTrabajador').value;

    const trabajador = {
        nombre,
        correo,
        contrasena,
        tipoTrabajador
    };

    // Obtener la lista de trabajadores desde localStorage
    let trabajadores = JSON.parse(localStorage.getItem('trabajadores')) || [];

    // Agregar el nuevo trabajador a la lista
    trabajadores.push(trabajador);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('trabajadores', JSON.stringify(trabajadores));
    
    alert('Cuenta creada correctamente');
    window.location.href = 'login.html';
});

function login() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Obtener la lista de trabajadores desde localStorage
    const trabajadores = JSON.parse(localStorage.getItem('trabajadores')) || [];

    // Buscar al usuario en la lista de trabajadores
    const trabajador = trabajadores.find(trab => trab.correo === usuario && trab.contrasena === contrasena);

    if (trabajador) {
        if (trabajador.tipoTrabajador === 'trabajador') {
            window.location.href = 'menu_trabajador.html';
        } else if (trabajador.tipoTrabajador === 'particular') {
            window.location.href = 'menu_particulares.html';
        } else {
            alert('Tipo de usuario no válido. Intente nuevamente.');
        }
    } else {
        alert('Usuario o contraseña incorrectos. Intente nuevamente.');
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const montoAportar = localStorage.getItem("montoAportar") || "$50.000";
    const numeroTarjeta = localStorage.getItem("numeroTarjeta") || "6578 2435 0089 4500";
    const fechaInicio = localStorage.getItem("fechaInicio") || "08";

    document.getElementById("montoAportar").value = montoAportar;
    document.getElementById("numeroTarjeta").value = numeroTarjeta;
    document.getElementById("fechaInicio").value = fechaInicio;
});
document.addEventListener("DOMContentLoaded", () => {
    const montoAportar = localStorage.getItem("montoAportar") || "$50.000";
    const numeroTarjeta = localStorage.getItem("numeroTarjeta") || "6578 2435 0089 4500";
    const fechaInicio = localStorage.getItem("fechaInicio") || "08";

    document.getElementById("montoAportar").value = montoAportar;
    document.getElementById("numeroTarjeta").value = numeroTarjeta;
    document.getElementById("fechaInicio").value = fechaInicio;
});

function guardarCambios() {
    const montoAportar = document.getElementById("montoAportar").value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaInicio = document.getElementById("fechaInicio").value;

    localStorage.setItem("montoAportar", montoAportar);
    localStorage.setItem("numeroTarjeta", numeroTarjeta);
    localStorage.setItem("fechaInicio", fechaInicio);

    alert("Cambios guardados");
}





function guardarCambios() {
    const nombre = document.getElementById("nombreResidente").value;
    const apellido = document.getElementById("apellidoResidente").value;
    const edad = document.getElementById("edad").value;
    const fechaIngreso = document.getElementById("fechaIngreso").value;

    localStorage.setItem("nombreResidente", nombre);
    localStorage.setItem("apellidoResidente", apellido);
    localStorage.setItem("rut", "5.675.987-K");  // Asignar valor fijo o manejar como prefieras
    localStorage.setItem("edad", edad);
    localStorage.setItem("fechaIngreso", fechaIngreso);

    alert("Cambios guardados");
}

function cargarDatos() {
    const nombre = localStorage.getItem("nombreResidente") || "Maria";
    const apellido = localStorage.getItem("apellidoResidente") || "Pinto";
    const rut = localStorage.getItem("rut") || "5.675.987-K";
    const edad = localStorage.getItem("edad") || "78";
    const fechaIngreso = localStorage.getItem("fechaIngreso") || "21/01/2024";

    const tabla = document.getElementById("tabla-residentes");
    tabla.innerHTML = `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${rut}</td>
            <td>${edad}</td>
            <td>${fechaIngreso}</td>
        </tr>
    `;
}

document.addEventListener("DOMContentLoaded", cargarDatos);


document.addEventListener("DOMContentLoaded", () => {
    const tablaContactos = document.getElementById("tabla-contactos");
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    // Función para renderizar la tabla con los contactos actuales
    function renderizarTabla() {
        tablaContactos.innerHTML = ""; // Limpiar la tabla antes de renderizar

        contactos.forEach((contacto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.correo}</td>
                <td>${contacto.telefono1}</td>
                <td>${contacto.telefono2}</td>
                <td>${contacto.direccion}</td>
                <td><button class="btn-eliminar" onclick="eliminarContacto(${index})">Eliminar</button></td>
            `;
            tablaContactos.appendChild(fila);
        });
    }

    // Función para eliminar un contacto
    window.eliminarContacto = (index) => {
        if (confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
            contactos.splice(index, 1); // Eliminar el contacto del array
            localStorage.setItem("contactos", JSON.stringify(contactos)); // Actualizar localStorage
            renderizarTabla(); // Renderizar la tabla actualizada
        }
    };

    renderizarTabla(); // Renderizar la tabla al cargar la página
});
document.addEventListener("DOMContentLoaded", () => {
    const formularioContacto = document.getElementById("formulario-contacto");

    formularioContacto.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const telefono1 = document.getElementById("telefono1").value;
        const telefono2 = document.getElementById("telefono2").value;
        const direccion = document.getElementById("direccion").value;

        // Crear objeto de contacto
        const nuevoContacto = {
            nombre,
            apellido,
            correo,
            telefono1,
            telefono2,
            direccion
        };

        // Obtener los contactos existentes o inicializar un array vacío
        const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
        contactos.push(nuevoContacto); // Agregar el nuevo contacto al array

        localStorage.setItem("contactos", JSON.stringify(contactos)); // Guardar en localStorage

        alert("Contacto agregado correctamente");

        // Redirigir a la página de detalle de contactos
        window.location.href = 'info_detall_residentes.html';
    });
});
// funciones.js

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario_contacto_emergencia');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario para manejarlo con JavaScript

        // Obtén los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const telefono1 = document.getElementById('telefono1').value;
        const telefono2 = document.getElementById('telefono2').value;
        const direccion = document.getElementById('direccion').value;

        // Aquí puedes agregar el código para almacenar los datos, como enviarlos a un servidor
        // o guardarlos en el almacenamiento local del navegador

        // Ejemplo: guardar en el almacenamiento local
        const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
        const nuevoContacto = {
            nombre,
            apellido,
            correo,
            telefono1,
            telefono2,
            direccion
        };
        contactos.push(nuevoContacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));

        // Notificar al usuario que el contacto ha sido agregado
        alert('Contacto agregado exitosamente.');

        // Opcional: reiniciar el formulario
        formulario.reset();
    });
});


// funciones.js

document.addEventListener('DOMContentLoaded', function() {
    const medicamentosTable = document.getElementById('medicamentosTable').getElementsByTagName('tbody')[0];
    
    // Función para renderizar la tabla con los medicamentos actuales
    function renderizarTabla() {
        // Obtener los medicamentos del localStorage
        const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

        medicamentosTable.innerHTML = ''; // Limpiar la tabla antes de renderizar

        medicamentos.forEach((medicamento, index) => {
            const row = medicamentosTable.insertRow();

            row.insertCell().textContent = medicamento.medicamento;
            row.insertCell().textContent = medicamento.tipo;
            row.insertCell().textContent = medicamento.frecuencia;
            row.insertCell().textContent = medicamento.dosis;
            row.insertCell().textContent = medicamento.fechaInicio;
            row.insertCell().textContent = medicamento.fechaTermino;

            // Celda de eliminar
            const deleteCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '*';
            deleteButton.className = 'btn btn-danger';
            deleteButton.addEventListener('click', function() {
                if (confirm('¿Estás seguro de que deseas eliminar este medicamento?')) {
                    medicamentos.splice(index, 1); // Eliminar el medicamento del array
                    localStorage.setItem('medicamentos', JSON.stringify(medicamentos)); // Actualizar localStorage
                    renderizarTabla(); // Renderizar la tabla actualizada
                }
            });
            deleteCell.appendChild(deleteButton);
        });
    }

    renderizarTabla(); // Renderizar la tabla al cargar la página
});

document.getElementById('agregarMedicamento').addEventListener('click', function() {
    // Obtener los valores del formulario
    const medicamento = document.getElementById('medicamento').value;
    const tipo = document.getElementById('tipo').value;
    const frecuencia = document.getElementById('frecuencia').value;
    const dosis = document.getElementById('dosis').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaTermino = document.getElementById('fechaTermino').value;

    // Crear un objeto con los datos
    const nuevoMedicamento = {
        medicamento,
        tipo,
        frecuencia,
        dosis,
        fechaInicio,
        fechaTermino
    };

    // Obtener la lista de medicamentos del localStorage o inicializar una nueva lista
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicamentos.push(nuevoMedicamento);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    // Redirigir a la página de la tabla de medicamentos
    window.location.href = 'mostrar_medicamentos.html';
});


// Función para guardar los datos de la ficha en localStorage
function guardarFicha() {
    const fechaInicio = document.getElementById("fechaInicio").value;
    const trabajadorResponsable = document.getElementById("trabajadorResponsable").value;
    const rut = document.getElementById("rut").value;
    const especificacionesPaciente = document.getElementById("exampleFormControlTextarea1").value;

    // Guardar en localStorage
    localStorage.setItem("fechaInicio", fechaInicio);
    localStorage.setItem("trabajadorResponsable", trabajadorResponsable);
    localStorage.setItem("rut", rut);
    localStorage.setItem("especificacionesPaciente", especificacionesPaciente);

    alert("Ficha guardada correctamente");
}

// Función para cargar los datos en la página de información detallada
function cargarFicha() {
    const especificacionesPaciente = localStorage.getItem("especificacionesPaciente") || "";

    // Mostrar en el textarea
    const textarea = document.getElementById("mostrarEspecificaciones");
    if (textarea) {
        textarea.value = especificacionesPaciente;
    }
}

// Ejecutar cargarFicha() al cargar la página de información detallada
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("info_detall_residentes.html")) {
        cargarFicha();
    }
});
