import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
// hooks
import useOffSetTop from "../../../hooks/useOffSetTop";
import useResponsive from "../../../hooks/useResponsive";
// utils
import cssStyles from "../../../utils/cssStyles";
// config
import { HEADER, NAVBAR } from "../../../config";
// components
import Logo from "../../../components/Logo";
import Iconify from "../../../components/Iconify";
import { IconButtonAnimate } from "../../../components/animate";
//
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DashboadHeader = ({
  onOpenSidebar,
  isCollapse = false,
  verticalLayout = false,
}) => {
  const isOffset =
    useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const isDesktop = useResponsive("up", "lg");

  return (
    <Toolbar
      sx={{
        // minHeight: "100% !important",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e1e1e1",
        borderBottomStyle: "outset",
      }}
    >
      {<Logo />}

      {/* {!isDesktop && (
        <IconButtonAnimate
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary" }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButtonAnimate>
      )} */}

      {/* <Searchbar /> */}
      {/* <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}> */}
      {/* <LanguagePopover />
          <NotificationsPopover />
          <ContactsPopover />
          <AccountPopover /> */}
      {/* </Stack> */}
    </Toolbar>
  );
};

export default DashboadHeader;
