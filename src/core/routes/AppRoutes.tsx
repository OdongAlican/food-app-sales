import { Route, Routes } from "react-router";
import Login from "../../app/pages/Login";
import Register from "../../app/pages/Register";
import { ROUTES } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
    </Routes>
  )
}
export default AppRoutes;
