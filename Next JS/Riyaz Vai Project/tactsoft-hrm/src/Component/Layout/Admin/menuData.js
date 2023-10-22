import AddHomeIcon from '@mui/icons-material/AddHome';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { Man2 } from '@mui/icons-material';
import { Group } from '@material-ui/icons';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const menuData = [
    {
        label: "Home",
        link: "/admin",
        submenu: null,
        icon: <AddHomeIcon />
    },
    {
        label: "Login",
        link: "/admin/login",
        submenu: null,
        icon: <VpnKeyIcon />
    },
    {
        label: "Employee",
        link: "/admin/employee",
        submenu: null,
        icon: <Group />
    },
    {
        label: "Department",
        link: "/admin/department",
        submenu: null,
        icon: <DepartureBoardIcon />
    },
    {
        label: "Monaem Khan",
        link: "/admin/monaem",
        submenu: null,
        icon: <AirlineSeatIndividualSuiteIcon />
    },
    {
        label: "Products",
        link: "admin/products",
        icon: <ShoppingBasketIcon />,
        submenu: [
            {
                label: "Electronics",
                link: "products/electronics",
                icon: <ElectricBoltIcon />,
                submenu: [
                    {
                        label: "Smartphones",
                        link: "/products/electronics/smartphone",
                        icon: <TabletAndroidIcon />,
                        submenu: null
                    },
                    {
                        label: "Laptops",
                        link: "/products/electronics/laptop",
                        icon: <LaptopIcon />,
                        submenu: null
                    }
                ]
            },
            {
                label: "Clothing",
                link: "home",
                icon: <CheckroomIcon />,
                submenu: [
                    {
                        label: "Men's Clothing",
                        link: "home",
                        icon: <ManIcon />,
                        submenu: null
                    },
                    {
                        label: "Women's Clothing",
                        link: "home",
                        icon: <WomanIcon />,
                        submenu: null
                    }
                ]
            }
        ]
    },
    {
        label: "Home",
        link: "home",
        submenu: null
    },
    {
        label: "Products 2",
        link: "admin/products",
        icon: <ShoppingBasketIcon />,
        submenu: [
            {
                label: "Electronics",
                link: "/products/electronics",
                icon: <ElectricBoltIcon />,

            },
            {
                label: "Clothing",
                link: "/products/cloth",
                icon: <CheckroomIcon />,
            }
        ]
    },
    {
        label: "Products 5",
        link: "admin/products",
        icon: <ShoppingBasketIcon />,
        submenu: [
            {
                label: "Electronics",
                link: "products/electronics",
                icon: <ElectricBoltIcon />,
                submenu: [
                    {
                        label: "Smartphones",
                        link: "/products/electronics/smartphone",
                        icon: <TabletAndroidIcon />,
                        submenu: null
                    },
                    {
                        label: "Laptops",
                        link: "/products/electronics/laptop",
                        icon: <LaptopIcon />,
                        submenu: null
                    }
                ]
            },
            {
                label: "Clothing",
                link: "home",
                icon: <CheckroomIcon />,
                submenu: [
                    {
                        label: "Men's Clothing",
                        link: "home",
                        icon: <ManIcon />,
                        submenu: null
                    },
                    {
                        label: "Women's Clothing",
                        link: "home",
                        icon: <WomanIcon />,
                        submenu: null
                    }
                ]
            }
        ]
    },
]