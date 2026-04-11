import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoaderPage from "@/components/Loader";
import ResetPassword from "@/pages/resetPassword";
import AdminPortal from "@/pages/adminPortal";

const SignIn = lazy(() => import("../pages/sign-in"));
const Register = lazy(() => import("../pages/register"));
const ForgotPassword = lazy(() => import("../pages/forgotPassword"));
const VerifyCode = lazy(() => import("../pages/verifyCode"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin-portal" element={<AdminPortal />} />
      </Routes>
    </Suspense>
  );
}

// import { Routes, Route } from "react-router-dom";
// import SignIn from "../pages/sign-in";
// import Register from "../pages/register";
// import ForgotPassword from "../pages/forgotPassword";
// import VerifyCode from "../pages/verifyCode";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       {" "}
//       <Route path="/sign-in" element={<SignIn />} />{" "}
//       <Route path="/register" element={<Register />} />{" "}
//       <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
//       <Route path="/verify-code" element={<VerifyCode />} />{" "}
//     </Routes>
//   );
// }
