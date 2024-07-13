import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import qImg from './assets/qImg.jpeg'
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
    path: "/1",
    element: <QuestionPage index={0}/>,
    loader: loadData
  },
  {
    path: "/g265d1k",
    element: <QuestionPage index={1} imgLink={qImg}/>,
    loader: loadData
  },
  {
    path: "/dj3pt18",
    element: <QuestionPage index={2} />,
    loader: loadData
  },
  {
    path: "/crta02k",
    element: <QuestionPage index={3} />,
    loader: loadData
  },
  {
    path: "/y72iwua",
    element: <QuestionPage index={4} />,
    loader: loadData
  },
  {
    path: "/uhc4z8x",
    element: <QuestionPage index={5}/>,
    loader: loadData
  },
  {
    path: "/ombf5y2",
    element: <QuestionPage index={6}/>,
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
