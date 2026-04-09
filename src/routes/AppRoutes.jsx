// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Loader from "@/components/Loader";

// const SignIn = lazy(() => import("@/pages/sign-in"));
// const Register = lazy(() => import("@/pages/register"));

// export default function AppRoutes() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Suspense>
//   );
// }

import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/sign-in";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgotPassword";
import VerifyCode from "../pages/verifyCode";

export default function AppRoutes() {
  return (
    <Routes>
      {" "}
      <Route path="/sign-in" element={<SignIn />} />{" "}
      <Route path="/register" element={<Register />} />{" "}
      <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
      <Route path="/verify-code" element={<VerifyCode />} />{" "}
    </Routes>
  );
}
