import { Navigate, Outlet } from 'react-router-dom';

const MainPrivateRoute = () => true ? <Outlet /> : <Navigate to="/" />;

export default MainPrivateRoute;
