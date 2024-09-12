import {
  defaultFont,
  primaryColor,
  grayColor,
  whiteColor,
} from "assets/jss/material-dashboard-react.js";

const footerStyle = {
  block: {
    color: whiteColor,
    padding: "10px 15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "14px",
  },
  left: {
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    textAlign: "right",
    color: grayColor[0],
  },
  footer: {
    borderTop: "1px solid " + grayColor[10],
    padding: "20px 0",
    backgroundColor: primaryColor[0],
    color: whiteColor,
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  a: {
    color: whiteColor,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    display: "flex",
    listStyle: "none",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
    marginRight: "20px",
  },
};

export default footerStyle;
