export const orderDate = (date) => {
  const newDate = date.split("-");
  const formatDate = newDate[2] + "/" + newDate[1] + "/" + newDate[0];
  return formatDate;
};

export function convertirMinutosAHorasYMinutos(minutos) {
  if (minutos < 0) {
    // Manejar casos de valores negativos, si es necesario
    return "El tiempo no puede ser negativo";
  }

  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  return {
    horas: horas,
    minutos: minutosRestantes,
  };
}
