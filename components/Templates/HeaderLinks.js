/*eslint-disable*/
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload, Settings } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { Menu } from "../../helper/Menu";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    console.log(Menu);
  }, []);

  const renderMenu = (item, index) => {
    let dropDown = false;

    if (item.children.length > 0) {
      dropDown = true;
    }
    return (
      <>
        {dropDown ? (
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText={item.menu_name}
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
              blur: true,
            }}
            buttonIcon={Apps}
            dropdownList={item.children.map((item, index) =>
              renderMenu(item, index)
            )}
          />
        ) : (
          <Link href={item.url}>
            <Button color="transparent" className={classes.navLink}>
              <Icon className={classes.icons}>unarchive</Icon>
              {item.menu_name}
            </Button>
          </Link>
        )}
      </>
    );
  };

  return (
    <List className={classes.list}>
      {Menu.map((item, index) => (
        <ListItem className={classes.listItem} key={index}>
          {renderMenu(item, index)}
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          // buttonText="Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Settings}
          dropdownList={[
            <a
              className={classes.dropdownLink}
              onClick={() => router.push("/Login")}
            >
              Profile
            </a>,
            <a
              className={classes.dropdownLink}
              onClick={() => router.push("/Login")}
            >
              Logout
            </a>,
          ]}
        />
      </ListItem>
    </List>
  );
}
