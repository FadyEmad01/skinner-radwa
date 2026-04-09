import VerifyCodeSection from "@/components/auth/verify-code-section";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";

export default function VerifyCode() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="flex-1 bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_50%,#FAF5FF_100%)]">
        <VerifyCodeSection />
      </section>
      <Footer />
    </main>
  );
}
