import {
  container,
  defaultFont,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "#6C5B7B", // Usar un color más suave
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Añadir una sombra sutil
    borderBottom: "1px solid " + grayColor[4], // Añadir una línea de separación
    marginBottom: "0",
    position: "fixed", // Cambiar a "fixed" para un encabezado pegajoso
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: whiteColor,
    border: "0",
    borderRadius: "0px",
    padding: "10px 20px", // Ajustar el padding para un mejor espaciado
    transition: "all 150ms ease",
    minHeight: "60px", // Aumentar la altura mínima
    display: "flex",
    alignItems: "center",
  },
  container: {
    ...container,
    minHeight: "60px", // Asegurar que el contenedor tenga la altura correcta
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "36px", // Aumentar la altura de línea para mejor legibilidad
    fontSize: "22px", // Aumentar el tamaño de la fuente
    borderRadius: "3px",
    textTransform: "none",
    color: whiteColor,
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  appResponsive: {
    top: "10px",
  },
  primary: {
    backgroundColor: "#6C5B7B", // Usar un color más suave
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default headerStyle;
