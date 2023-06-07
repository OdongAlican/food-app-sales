import { Route, Routes } from "react-router";
import Login from "../../app/pages/Login";
import Register from "../../app/pages/Register";
import { ROUTES } from "./routes";
import Dashboard from "../../app/pages/Dashboard";
import Packages from "../../app/pages/Packages";
import Profile from "../../app/pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} >
        <Route path={ROUTES.PACKAGES} element={<Packages />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes;
