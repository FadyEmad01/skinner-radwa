import { AnalyticsCards } from "./analytics-cards";
import DoctorTabsSection from "./doctorTabsSection";



export default function DoctorDashboardSection() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto grid max-w-4xl gap-10 px-6  items-start grid-cols-1">
        {/* Left */}
        <div className="space-y-4">
          <AnalyticsCards />
        </div>

        {/* Right */}
        <div className="">
          <DoctorTabsSection />
        </div>
      </div>
    </section>
  );
}
