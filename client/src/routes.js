import Admin from "./pages/Admin";
import {
    SKILLS_ROUTE,
    ADMIN_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROJECT_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import Auth from "./pages/Auth";
import Skills from "./pages/Skills";
import Registration from "./pages/Registration";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SKILLS_ROUTE,
        Component: Skills
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: PROJECT_ROUTE + '/:id',
        Component: ProjectPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    }
]
