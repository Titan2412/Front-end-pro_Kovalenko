import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage } from "../pages";

const routerConfig = [{
    path: '/',
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
        { index: true, element: <HomePage /> },
        {
            path: "contacts",
            children: [
                {
                    index: true,
                    async lazy() {
                        const { Contacts } = await import("../pages/index");

                        return { Component: Contacts };
                    },
                },
            ],
        },
        {
            path: "AboutMe",
            children: [
                {
                    index: true,
                    async lazy() {
                        const { AboutMe } = await import("../pages/index");

                        return { Component: AboutMe };
                    },
                },
            ],
        },
    ]
}];

const options = {
    basename: '/'
}

export const router = createBrowserRouter(routerConfig, options)