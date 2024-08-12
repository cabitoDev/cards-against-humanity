import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Lobby } from '../pages/Lobby'
import { GameMenu } from '../pages/GameMenu'
import { Play } from '../pages/Play'
import { Cards } from '../pages/Cards'

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
      element: <GameMenu />
    },

    {
      path: 'table/cards',
      element: <Cards />
    },

    {
      path: 'table/play',
      element: <Play />
    }
  ])

  return <RouterProvider router={router} />
}
