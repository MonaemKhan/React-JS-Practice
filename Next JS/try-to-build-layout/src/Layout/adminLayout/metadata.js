import AddHomeIcon from '@mui/icons-material/AddHome';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
export const menuData=[
    {
        label: "Home",
        link: "/admin",
        submenu: null,
        icon: <AddHomeIcon/>
    },
    {
        label: "Post",
        link: "/admin/post-data-info",
        submenu: null,
        icon: <DynamicFeedIcon/>
    },
    {
        label: "Home",
        link: "/admin",
        submenu: [
            {
                label: "Home1",
                link: "/admin",
                submenu: null,
                icon: <AddHomeIcon/>
            }
        ],
        icon: <AddHomeIcon/>
    }
]