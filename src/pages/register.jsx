import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";
import RegisterSection from "../components/auth/register-section";


export default function register() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <section className="flex-1 bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_50%,#FAF5FF_100%)]">
          <RegisterSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
