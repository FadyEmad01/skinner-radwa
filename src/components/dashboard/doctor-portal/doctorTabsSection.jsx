import {
  Calendar,
  FileText,
  Info,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { PendingCasesCard } from "./pendingCases-card";

const cartItems = [
  {
    /* HEADERS / META  */
    submitted_on: "12/18/2024",
    id: 1,

    /* PATIENT BLOCK  */
    patient_image:
      "https://english.ahram.org.eg/Media/News/2025/10/22/41_2025-638967308982884228-288.jpg",
    patient_name: "John D.",
    patient_age: 34,
    patient_gender: "Male",

    /* AI ANALYSIS BLOCK */
    ai_diagnosis: "Eczema (Atopic Dermatitis)",
    ai_severity: "Medium",
    ai_confidence: "87%",
    ai_description:
      "Eczema (dermatitis) is a chronic, non-contagious condition causing itchy, dry, red, or inflamed skin, commonly appearing on elbows, knees, face, and hands. Primarily caused by genetic factors and immune system reactions, it is often managed with daily moisturizers, avoiding triggers (stress, harsh soaps), and topical treatments.",
    ai_note:
      "AI analysis is preliminary. Please provide your professional assessment.",
  },
];

export default function DoctorTabsSection() {
  return (
    <>
      <Tabs defaultValue="pending-cases" className="mt-5">
        <TabsList className="grid h-10 grid-cols-3 bg-[#ECECF0] p-1">
          <TabsTrigger
            value="pending-cases"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Info className="size-4" /> Pending Cases (2)
          </TabsTrigger>
          <TabsTrigger
            value="reviewed-cases"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FileText className="size-4" /> Reviewed Cases
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Calendar className="size-4" /> Schedule
          </TabsTrigger>
        </TabsList>

        {/* Doctor Verification Tab */}
        <TabsContent value="pending-cases" className="mt-5 space-y-4">
          <PendingCasesCard item={cartItems[0]} />
          <PendingCasesCard item={cartItems[0]} />
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="reviewed-cases" className="mt-5"></TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="schedule" className="mt-5"></TabsContent>
      </Tabs>
    </>
  );
}
