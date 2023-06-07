import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { accessTokenKey } from "../utills/constants";
import { isAuthenticated } from "./pages/Login/requireAuth";
import AppRoutes from "../core/routes/AppRoutes";
import { authenticatedFailedAction, isAuthenticatedAction } from "./pages/Login/authentication_slice";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(isAuthenticatedAction())
      sessionStorage.getItem(accessTokenKey);
    } else {
      dispatch(authenticatedFailedAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ToastContainer />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;