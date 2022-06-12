// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
// react components for routing our app without refresh
import Link from "next/link";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import React from "react";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return <SectionBasics />;
};

export default Home;
