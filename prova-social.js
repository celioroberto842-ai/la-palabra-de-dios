/*
  PRUEBA SOCIAL — SOLO DATOS REALES
  =================================

  Este archivo alimenta dos cosas de la página:

    1. La sección de testimonios (se muestra en cuanto haya al menos uno).
    2. El aviso "Fulana, de tal ciudad, se unió hace 2 días" (aparece abajo, a
       un costado, en cuanto haya al menos un acceso reciente).

  Mientras las listas estén vacías, ninguna de las dos aparece. Es a propósito:
  una sección de testimonios vacía o con personas inventadas hace más daño que
  no tenerla. Quien paga cree que esas personas existen.

  REGLAS

  Testimonios
    - Solo de personas reales que usan la aplicación, y con su permiso.
    - Nombre y la inicial del apellido ("María G."), nunca el apellido completo.
    - Usa sus palabras, aunque sean sencillas. Se nota cuando alguien las pule.
    - La foto es opcional. Si no hay, se muestran sus iniciales.

  Accesos
    - Solo personas que de verdad compraron o se registraron.
    - Solo el primer nombre y la ciudad. Nunca correo ni teléfono.
    - La fecha tiene que ser la real (formato AAAA-MM-DD). La página calcula
      "hoy", "ayer" o "hace 3 días" a partir de ella.
    - Los accesos de más de 30 días no se muestran: decir "se acaba de unir"
      de alguien que entró hace dos meses también es mentir.
    - Si vas a mostrar el nombre de alguien, avísale en la política de
      privacidad que esto puede pasar.

  Para sacar los accesos reales: Hotmart → Ventas → lista de compradores.
*/

window.PRUEBA_SOCIAL = {
  testimonios: [
    {
      nombre: "María Elena",
      ciudad: "Guadalajara, Jalisco",
      edad: 68,
      texto: "Los mensajes me ayudan a comenzar el día con el corazón más tranquilo y lleno de esperanza.",
      foto: "imagens/testimonios-reais.png",
      fotoPosicao: "-182px -243px",
    },
    {
      nombre: "Juan Carlos",
      ciudad: "Puebla, Puebla",
      edad: 72,
      texto: "Es muy fácil de usar. Me gusta escuchar la oración de la mañana antes del café.",
      foto: "imagens/testimonios-reais.png",
      fotoPosicao: "-457px -243px",
    },
    {
      nombre: "Ana Paula",
      ciudad: "Mérida, Yucatán",
      edad: 34,
      texto: "En los días más ocupados encuentro unos minutos para respirar, escuchar y acercarme de nuevo a Dios.",
      foto: "imagens/testimonios-reais.png",
      fotoPosicao: "-732px -243px",
    },
    {
      nombre: "Paulo Mendes",
      ciudad: "Monterrey, Nuevo León",
      edad: 43,
      texto: "Poder escribir mi petición de oración me hizo sentir escuchado y acompañado.",
      foto: "imagens/testimonios-reais.png",
      fotoPosicao: "-1009px -243px",
    },
  ],

  accesos: [
    // Ejemplo del formato (bórralo y pon los reales):
    // { nombre: "Rosa", ciudad: "Puebla", fecha: "2026-09-13" },
  ],
};
