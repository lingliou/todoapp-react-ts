import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
    useParams,
} from "react-router-dom";
import TodoList from "./pages/TodoList";
import NewTodo from "./pages/NewTodo";
import TodoDetail from "./pages/TodoDetail";
import Edit from "./pages/Edit";
import { ContextProvider } from "./store/todosCtx";
import CategoryList from "./pages/CategoryList";
import AllCategory from "./pages/AllCategory";
import ErrorPage from "./pages/ErrorPage";

const CategoryRoute = () => {
    const { category } = useParams<{ category?: string }>();

    return category ? <CategoryList /> : <AllCategory />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoList />,
    },
    {
        path: "/new",
        element: <NewTodo />,
    },
    {
        path: "/category/:category?",
        element: <CategoryRoute />,
    },
    {
        path: "/edit/:id",
        element: <Edit />,
    },
    {
        path: "/id/:id",
        element: <TodoDetail />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ContextProvider>
            <div className="app">
                <RouterProvider router={router} />
            </div>
        </ContextProvider>
    </React.StrictMode>
);
