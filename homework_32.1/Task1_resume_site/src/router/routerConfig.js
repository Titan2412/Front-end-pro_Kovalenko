import { createBrowserRouter } from 'react-router-dom'
import { Homepage, ErrorPage, Todo, Swapi } from '../pages'

const routerConfig = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        id: 'root',
        children: [
            { index: true, element: <Homepage /> },
            { path: 'home', element: <Homepage /> },
            { path: 'todo', element: <Todo /> },
            { path: 'swapi', element: <Swapi /> }
        ]
    }
]

export const router = createBrowserRouter(routerConfig);