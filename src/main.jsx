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
    path: "/2",
    element: <QuestionPage index={1} imgLink={qImg}/>,
    loader: loadData
  },
  {
    path: "/3",
    element: <QuestionPage index={2} />,
    loader: loadData
  },
  {
    path: "/4",
    element: <QuestionPage index={3} />,
    loader: loadData
  },
  {
    path: "/5",
    element: <QuestionPage index={4} />,
    loader: loadData
  },
  {
    path: "/6",
    element: <QuestionPage index={5}/>,
    loader: loadData
  },
  {
    path: "/7",
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
