/*Crea un componente que tome un arreglo de objetos con propiedades
"nombre" y "edad", y muestre el nombre de la persona más joven.
Utiliza una variable de estado para guardar el arreglo y mostrar el
resultado.*/
//Hacemos las importaciones correspondientes.
import React from "react";
import { useState } from "react";
//Cambiamos el nombre de la pestaña.
window.document.title=('PersonaMenor');
//Creamos la función por defecto PersonaJoven.
function PersonaJoven() {
  //Creamos 2 variables de tipo useState.
  const [Persona, setPersona] = useState([]);
  const [PersonaMasJoven, setPersonaMasJoven] = useState([]);

  //Creamos una función que sera la encargada del manejo de cambio en los inputs.
  const CambiodeInput = (event, index, key) => {
    //Le agregamos a newPersona todo lo que tiene el arreglo Persona(una copia)
    const newPersona = [...Persona];
    //Toma el index y la key del input que se esta editando
    newPersona[index][key] = event.target.value;
    setPersona(newPersona);
  };

//Creamos otra función que sera la encargada de encontrar a la persona más joven de la lista.
  const EncontrarPersonaJoven = () => {
    // Infinity es una variable de alcance global, es mayor que cualquier otro número.
    let EdadJoven = Infinity;
    let NombreJoven = '';
    /*Hacemos un forEach (Llama a una función callback específica una vez por cada 
      elemento sobre el que itera dentro de un arreglo).*/
    Persona.forEach(person => {
      //Si person.edad es menor a EdadJoven hara lo siguiente:
      if (parseInt(person.edad) < EdadJoven) {
        EdadJoven = person.edad;
        NombreJoven = person.nombre;
      }
    });
    //Luego de haber evaluado quien es la persona menor asigna el Nombre a PersonaMasJoven.
    setPersonaMasJoven(NombreJoven);
  };
//Creamos una función más que sera la encargada de agregar una nueva Persona con su Edad.
  const AgregarPersona = () => {
     //Le agregamos a newPersona todo lo que tiene el arreglo Persona(una copia)
    const newPersona = [...Persona];
    //Agregamos el nuevo elemento al final del arreglo
    newPersona.push({ nombre: "", edad: "" });
    //Le asignamos a ese valor a traves del setPersona a la variable de estado Persona
    setPersona(newPersona);
  };

    return (
    //Utilizamos el map para crear un nuevo array con los resultados de la funcion.
    <div>
      <h1>Lista de Personas</h1>
      {Persona.map((person, index) => (
        //El key ayuda a identificar que ítems han cambiado, son agregados, o son eliminados.
        <div key={index}>
          <label>Nombre:
          <input
          //Input donde ingresaremos el nombre.
            type="text"
            placeholder="Nombre"
            //Evalua el nombre de la persona.
            value={person.nombre}
            //onChange para que detecte cualquier cambio en los inputs de Nombre.
            onChange={(event) => CambiodeInput(event, index, "nombre")}
          />
          </label>
          <label>Edad:
          <input
          //Input donde ingresaremos la edad.
            type="number"
            placeholder="Edad"
            //Evalua la edad de la persona.
            value={person.edad}
            //onChange para que detecte cualquier cambio en los inputs de Edad.
            onChange={(event) => CambiodeInput(event, index, "edad")}
          />
          </label>
        </div> 
      ))} 
      <button onClick={AgregarPersona}>Agregar Persona</button>
      <button onClick={EncontrarPersonaJoven}>Encontrar persona más joven</button>
      <div>La persona más joven de la lista es: {PersonaMasJoven}</div>
    </div>
  );
}

export default PersonaJoven;