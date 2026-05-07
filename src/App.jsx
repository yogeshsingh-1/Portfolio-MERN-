import AppRoutes from "./routes/AppRoutes.jsx";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
     <RouterProvider router={AppRoutes} />
  )
}

export default App