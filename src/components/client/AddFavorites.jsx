"use client";

export default function AddFavorites({ movie }) {
  const addFavorites = () => {
    // Obtén los datos actuales del localStorage
    const datosGuardados = localStorage.getItem("movies");

    // Convierte los datos a un array o inicializa un array vacío si no hay datos
    const datos = datosGuardados ? JSON.parse(datosGuardados) : [];

    // Función para verificar si una película con el mismo id ya está en la lista
    function peliculaYaEnLista(id) {
      return datos.some((pelicula) => pelicula.id === id);
    }

    // Verifica si la película ya está en la lista
    if (!peliculaYaEnLista(movie.id)) {
      // Agrega la nueva película al array
      datos.push(movie);
    } else {
      // Elimina la película si ya está en la lista
      const indice = datos.findIndex((pelicula) => pelicula.id === movie.id);
      datos.splice(indice, 1);
    }

    // Guarda el array actualizado en el localStorage
    localStorage.setItem("movies", JSON.stringify(datos));
  };

  return (
    <button className="text-neutral-100 text-3xl" onClick={addFavorites}>
      ❤️
    </button>
  );
}
