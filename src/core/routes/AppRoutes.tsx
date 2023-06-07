import { Route, Routes } from "react-router";
import Login from "../../app/pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  )
}
export default AppRoutes;
