import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  alpha,
  Typography,
  Divider,
  MenuItem,
} from "@mui/material";
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
import MyAvatar from "../../../components/MyAvatar";
import MenuPopover from "../../../components/MenuPopover";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

//

// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  {
    label: "Profile",
    linkTo: "PATH_DASHBOARD.user.profile",
  },
  {
    label: "Settings",
    linkTo: "PATH_DASHBOARD.user.account",
  },
];

const ContentHeader = ({}) => {
  const [open, setOpen] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {};
  const user = {};
  return (
    <Toolbar
      sx={{
        position: "relative",
        // minHeight: "100% !important",
        boxShadow: "rgba(0, 0, 0, 0.3) 5px 3px 8px",
      }}
    >
      <Stack sx={{ flex: 1 }} />
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>
      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 15px",

          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName} teste
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}teste
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </Toolbar>
  );
};

export default ContentHeader;
