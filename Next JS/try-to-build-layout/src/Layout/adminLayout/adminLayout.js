import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "@mui/material";
import { menuData } from "./metadata";
import { useRouter } from "next/router";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const Footer = styled("div")(({ theme }) => ({
  backgroundColor: "#F4F6F9",
  color: "black",
  padding: theme.spacing(2),
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%"
}));

export default function AdminLayout(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  //add
  const [subMenuOpen, setSubMenuOpen] = React.useState([]);
  const [subSubMenuOpen, setSubSubMenuOpen] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //design
  const handleSubMenuToggle = (index) => {
    if (subMenuOpen.includes(index)) {
      setSubMenuOpen(subMenuOpen.filter((item) => item !== index));
    } else {
      setSubMenuOpen([...subMenuOpen, index]);
    }
  };

  const handleSubSubMenuToggle = (index, subIndex) => {
    const key = `${index}-${subIndex}`;
    if (subSubMenuOpen.includes(key)) {
      setSubSubMenuOpen(subSubMenuOpen.filter((item) => item !== key));
    } else {
      setSubSubMenuOpen([...subSubMenuOpen, key]);
    }
  };

  const router = useRouter()

  const isRouteOrParentActive = (route) => {
    const currentRoute = router.pathname;
    const currentRouterSplit = router.pathname.split("/");
    const routeSplit = route.split('/');
    if (currentRouterSplit.length > 3) {
      return currentRouterSplit[2] === routeSplit[2]
    }
    return currentRoute === route
  };
  //design
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Try To Build Admin Layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <Link style={{ width: "75%", marginLeft: "15px" }}>Monaem Khan</Link>
        </DrawerHeader>
        <Divider />
        <List>
        {menuData.map((menuItem, index) => (
            <div key={index}>
              {menuItem.submenu ? <ListItem disablePadding>
                <ListItemButton onClick={() => handleSubMenuToggle(index)}>
                  <ListItemIcon>
                    {menuItem.icon ? menuItem.icon : <InboxIcon />}
                  </ListItemIcon>

                  <ListItemText primary={menuItem.label} />

                  {menuItem.submenu && (
                    <IconButton onClick={() => handleSubMenuToggle(index)}>
                      {subMenuOpen.includes(index) ? <ExpandMoreIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  )}
                </ListItemButton>
              </ListItem> :
                <Link style={{ textDecoration: 'none', color: 'inherit' }} href={menuItem.link}>
                  <ListItem className={`${isRouteOrParentActive(menuItem.link) ? 'selected-menu' : ''
                    }`} disablePadding>
                    <ListItemButton onClick={() => handleSubMenuToggle(index)}>
                      <ListItemIcon className={`${isRouteOrParentActive(menuItem.link) ? 'selected-icon' : ''
                        }`}>
                        {menuItem.icon ? menuItem.icon : <InboxIcon />}
                      </ListItemIcon>

                      <ListItemText primary={menuItem.label} />

                      {menuItem.submenu && (
                        <IconButton onClick={() => handleSubMenuToggle(index)}>
                          {subMenuOpen.includes(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      )}
                    </ListItemButton>
                  </ListItem>
                </Link>
              }

              {menuItem.submenu && subMenuOpen.includes(index) && (
                <List style={{ paddingLeft: 25 }}>
                  {menuItem.submenu.map((subMenuItem, subIndex) => (
                    <div key={subIndex}>
                      {
                        subMenuItem.submenu ? <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSubSubMenuToggle(index, subIndex)}>
                            <ListItemIcon>
                              {subMenuItem.icon ? subMenuItem.icon : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={subMenuItem.label} />
                            {subMenuItem.submenu && (
                              <IconButton onClick={() => handleSubSubMenuToggle(index, subIndex)}>
                                {subSubMenuOpen.includes(`${index}-${subIndex}`) ? (
                                  <ExpandLessIcon />
                                ) : (
                                  <ExpandMoreIcon />
                                )}
                              </IconButton>
                            )}
                          </ListItemButton>
                        </ListItem> : <Link style={{ textDecoration: 'none', color: 'inherit' }} href={subMenuItem.link}>
                          <ListItem disablePadding>
                            <ListItemButton onClick={() => handleSubSubMenuToggle(index, subIndex)}>
                              <ListItemIcon>
                                {subMenuItem.icon ? subMenuItem.icon : <MailIcon />}
                              </ListItemIcon>
                              <ListItemText primary={subMenuItem.label} />
                              {subMenuItem.submenu && (
                                <IconButton onClick={() => handleSubSubMenuToggle(index, subIndex)}>
                                  {subSubMenuOpen.includes(`${index}-${subIndex}`) ? (
                                    <ExpandLessIcon />
                                  ) : (
                                    <ExpandMoreIcon />
                                  )}
                                </IconButton>
                              )}
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      }


                      {subMenuItem.submenu &&
                        subSubMenuOpen.includes(`${index}-${subIndex}`) && (
                          <List style={{ paddingLeft: 25 }}>
                            {subMenuItem.submenu.map((subSubMenu, subSubMenuIndex) => (
                              <Link style={{ textDecoration: 'none', color: 'inherit' }} href={subSubMenu.link}>
                                <ListItem key={subSubMenuIndex} disablePadding>
                                  <ListItemButton style={{ paddingLeft: 25 }}>
                                    <ListItemIcon>
                                      {subSubMenu.icon ? subSubMenu.icon : <InboxIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={subSubMenu.label} />
                                  </ListItemButton>
                                </ListItem>
                              </Link>
                            ))}
                          </List>
                        )}
                    </div>
                  ))}
                </List>
              )}
              <Divider />
              <Divider />
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,mb: 4}}>
        <DrawerHeader />
        {props.children}
      </Box>
      <Footer position="fixed">
        <Typography variant="h6" noWrap component="div">
          &copy; M.A. Monaem Khan, {new Date().getFullYear()}
        </Typography>
      </Footer>
    </Box>
  );
}
