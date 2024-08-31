import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home.tsx'
import { Projects } from './pages/Projects.tsx'
import { Art } from './pages/Art.tsx'
import { Languages } from './pages/Languages.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/art',
    element: <Art />,
  },
  {
    path: '/languages',
    element: <Languages />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
