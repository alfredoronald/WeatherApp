export function formatDateTime(itemData) {
const item = {
  dt: itemData
};

const timezoneOffset = -14400;

const fechaLocal = new Date((item.dt + timezoneOffset) * 1000);

const opcionesFecha = { 
  weekday: "long", 
  day: "numeric", 
  month: "long"
};

const opcionesHora = { 
  hour: "2-digit", 
  minute: "2-digit" 
};

const fechaTexto = fechaLocal.toLocaleDateString("es-ES", opcionesFecha);
const horaTexto = fechaLocal.toLocaleTimeString("es-ES", opcionesHora);

return { fechaTexto, horaTexto}

}
