import RegisterSection from "../components/auth/register-section";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";
import SignInSection from "@/components/auth/signin-section";

export default function signIn() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <section className="flex-1 bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_50%,#FAF5FF_100%)]">
          {/* <RegisterSection /> */}
          <SignInSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
