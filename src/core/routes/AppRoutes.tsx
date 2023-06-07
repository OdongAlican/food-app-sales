import { Route, Routes } from "react-router";
import Login from "../../app/pages/Login";
import Register from "../../app/pages/Register";
import { ROUTES } from "./routes";
import Dashboard from "../../app/pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
    </Routes>
  )
}
export default AppRoutes;
