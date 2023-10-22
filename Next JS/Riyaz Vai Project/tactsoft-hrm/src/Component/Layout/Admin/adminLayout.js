import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { menuData } from './menuData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { useRouter } from 'next/router';
// import Footer from '@/Component/Layout/Frontend/Footer.js';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


const Footer = styled('div')(({ theme }) => ({
  backgroundColor: "#F4F6F9",
  color: 'black',
  padding: theme.spacing(2),
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
}));

export default function AdminLayout(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState([]);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Navbar expand="lg" style={{ width: '100%' }}>
            <Container fluid style={{ padding: 0, margin: 0 }}>
              <Navbar.Brand href="#home">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                  <Link className='nav-link' href="/home">
                    Home
                  </Link>
                  <Link className='nav-link' href="/link">
                    Link
                  </Link>
                  <Link className='nav-link' href="/hello">
                    Hello
                  </Link>
                </Nav>

                <Nav className='admin-dropdown'>

                  <NavDropdown className=" me-3" title={
                    <Badge badgeContent={3} color="warning">
                      <NotificationsIcon />
                    </Badge>
                  }>
                    <NavDropdown.Item onClick={() => onLogout()}>Logout</NavDropdown.Item>
                    <NavDropdown.Item>Your Profile</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="me-3" title={
                    <Badge badgeContent={3} color="error">
                      <CommentIcon />
                    </Badge>
                  }>
                    <NavDropdown.Item onClick={() => onLogout()}>Logout</NavDropdown.Item>
                    <NavDropdown.Item>Your Profile</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="me-3" title={
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden' }}>
                      <Image src='/image/my.png' alt="User Image" width={30} height={30} />
                    </div>
                  } id="user-dropdown">
                    <NavDropdown.Item >Logout</NavDropdown.Item>
                    <NavDropdown.Item>Your Profile</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <Link href={'/admin'}>
            <Image className='ms-3' src='/image/tactsoft-logo.png' alt="Logo" width={109} height={55} />
          </Link>
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
                      {subMenuOpen.includes(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <div className='mb-5'>
          {props.children}
        </div>
      </Main>
      <Footer>
        &copy; {new Date().getFullYear()}  Tactsoft Limited
      </Footer>
    </Box>
  );
}
