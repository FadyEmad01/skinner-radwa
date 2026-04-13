import { Clock, TrendingUp, UserCheck, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import DoctorReviewCard from "./DoctorReviewCard";

export default function AdminTabsSection() {
  return (
    <>
      <Tabs defaultValue="doctor-verification" className="mt-5">
        <TabsList className="grid h-10 grid-cols-3 bg-[#ECECF0] p-1">
          <TabsTrigger
            value="doctor-verification"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <UserCheck className="size-4" /> Doctor Verification (2)
          </TabsTrigger>
          <TabsTrigger
            value="user-management"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Users className="size-4" /> User Management
          </TabsTrigger>
          <TabsTrigger
            value="Analytics"
            className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <TrendingUp className="size-4" /> Analytics
          </TabsTrigger>
        </TabsList>

        {/* Doctor Verification Tab */}
        <TabsContent value="doctor-verification" className="mt-5 space-y-4">
          <DoctorReviewCard />
          <DoctorReviewCard />
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="user-management" className="mt-5"></TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="Analytics" className="mt-5"></TabsContent>
      </Tabs>
    </>
  );
}
