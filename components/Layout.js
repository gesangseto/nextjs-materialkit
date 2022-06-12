import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Footer from "components/Templates/Footer.js";
import Header from "components/Templates/Header.js";
import HeaderLinks from "components/Templates/HeaderLinks.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <div>
      <Header
        brand="Revolusi Mental"
        rightLinks={<HeaderLinks />}
        fixed
        // color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 80 }}
      >
        {children}
      </div>
      <Footer fixed />
    </div>
  );
}
