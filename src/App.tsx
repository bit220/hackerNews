import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import NewsList from "./components/NewsList/NewsList";
import ErrorPage from "./components/UI/ErrorPage";
import NewsDetailedPage from "./components/NewsDetailedPage/NewsDetailedPage";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <NewsList/>,
            errorElement: <ErrorPage />,
        },
        {
            path: '/news/:id',
            element: <NewsDetailedPage />
        },
        {
            path: '/news',
            element: <Navigate to="/"/>
        }
    ]);


    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
