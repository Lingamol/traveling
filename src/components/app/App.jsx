import { Routes, Route } from "react-router-dom";
// import { lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
import HomePage from "../../pages/HomePage";
import About from "../../pages/About";
// import { Flip, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useAuth from "../../hooks/useAuth";

// import NotFoundPage from "../../pages/NotFoundPage";
// import { refreshUser } from "../../redux/auth/operations";
// import PrivateRoute from "../PrivateRoute";
// import RestrictedRoute from "../RestrictedRoute";
import SharedLayout from "../SharedLayout";
import Trips from "../../pages/Trips";
import Calendar from "../../pages/Calendar";
// import Spinner from "../Spinner";

// const NoticesCategoriesNav = lazy(() =>
//   import("../NoticesElements/NoticesCategoriesNav")
// );

// const RegisterPage = lazy(() => import("../../pages/Register"));
// const LoginPage = lazy(() => import("../../pages/Login"));
// const NewsPage = lazy(() => import("../../pages/NewsPage"));
// const NoticesPage = lazy(() => import("../../pages/NoticesPage"));
// const OurFriendsPage = lazy(() => import("../../pages/OurFriendsPage"));
// const UserPage = lazy(() => import("../../pages/UserPage"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
