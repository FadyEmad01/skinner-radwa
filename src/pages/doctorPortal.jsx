import DashboardNavbar from "@/layouts/dashboardNavbar";
import DoctorDashboardSection from "@/components/dashboard/doctor-portal/doctorDashboardSection";

export default function DoctorPortal() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <DashboardNavbar role="doctor" name="Radwaa" specialization="Dermatologist" />
      <section className="flex-1 bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_50%,#FAF5FF_100%)]">
        <DoctorDashboardSection />
      </section>

    </main>
  );
}
