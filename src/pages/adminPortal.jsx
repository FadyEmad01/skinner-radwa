import DashboardNavbar from "@/layouts/dashboardNavbar";
import AdminDashboardSection from "@/components/dashboard/adminDashboardSection";

export default function AdminPortal() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DashboardNavbar role="admin" name="Radwaa" />
      <section className="flex-1 bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_50%,#FAF5FF_100%)]">
        <AdminDashboardSection />
      </section>

    </main>
  );
}
