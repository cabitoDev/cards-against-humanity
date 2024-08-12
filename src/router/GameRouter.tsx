import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Lobby } from '../pages/Lobby'
import { Play } from '../pages/Play'
import { Cards } from '../pages/Cards'
import { Table } from '../pages/Table'

export const GameRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/lobby',
      element: <Lobby />
    },
    {
      path: '/*',
      element: <Navigate to={'/lobby'} />
    },
    {
      path: '/table',
      element: <Table />
    },

    {
      path: '/table/cards',
      element: <Cards />
    },

    {
      path: '/table/play',
      element: <Play />
    }
  ])

  return <RouterProvider router={router} />
}
