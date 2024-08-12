import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Lobby } from '../pages/Lobby'
import { GameMenu } from '../pages/GameMenu'

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
      path: '/game/:gameId',
      element: <GameMenu />
    }
  ])

  return <RouterProvider router={router} />
}
