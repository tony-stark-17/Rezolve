import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionPage from './components/QuestionPage';

import './index.css'

const loadData = async () => {
  const response = await fetch(
    `https://api.npoint.io/0bec7c916682bda72d48`
  );
  const data = await response.json();
  return data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuestionPage index={0}/>,
    loader: loadData
  },
  {
    path: "/2",
    element: <QuestionPage index={1} />,
    loader: loadData
  },
  {
    path: "/3",
    element: <QuestionPage index={2} />,
    loader: loadData
  },
  {
    path: "/4",
    element: <QuestionPage index={5}/>,
    loader: loadData
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
          <RouterProvider router={router} />
      </NextUIProvider>
  </React.StrictMode>
)
