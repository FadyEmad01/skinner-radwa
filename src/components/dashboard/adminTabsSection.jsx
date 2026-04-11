import { Clock, TrendingUp, UserCheck, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function AdminTabsSection() {
  return (
    <>
    <div className="flex">

    </div>
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
          <Card className="w-full p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Section: Name and Info */}
              <div className="flex flex-col space-y-1.5 min-w-[250px]">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Dr. Robert Williams
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-600 border-orange-200 px-2 py-0.5 flex items-center gap-1 font-medium"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Pending
                  </Badge>
                </div>
                <p className="text-slate-500 text-sm">
                  r.williams@hospital.com
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Submitted: 12/18/2024
                </p>
              </div>

              {/* Middle Section: Task */}
              <div className="flex-1">
                <p className="text-slate-600 text-[15px]">
                  Verify information id
                </p>
              </div>

              {/* Middle Section: Department */}
              <div className="flex-1">
                <p className="text-slate-600 text-[15px]">Dermatology</p>
              </div>

              {/* Right Section: Action */}
              <div>
                <Button className="bg-[#0a0a14] hover:bg-[#1a1a2e] text-white px-6 rounded-md">
                  Review Application
                </Button>
              </div>
            </div>
          </Card>
          <Card className="w-full p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Section: Name and Info */}
              <div className="flex flex-col space-y-1.5 min-w-[250px]">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Dr. Robert Williams
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-600 border-orange-200 px-2 py-0.5 flex items-center gap-1 font-medium"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Pending
                  </Badge>
                </div>
                <p className="text-slate-500 text-sm">
                  r.williams@hospital.com
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Submitted: 12/18/2024
                </p>
              </div>

              {/* Middle Section: Task */}
              <div className="flex-1">
                <p className="text-slate-600 text-[15px]">
                  Verify information id
                </p>
              </div>

              {/* Middle Section: Department */}
              <div className="flex-1">
                <p className="text-slate-600 text-[15px]">Dermatology</p>
              </div>

              {/* Right Section: Action */}
              <div>
                <Button className="bg-[#0a0a14] hover:bg-[#1a1a2e] text-white px-6 rounded-md">
                  Review Application
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="user-management" className="mt-5"></TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="Analytics" className="mt-5"></TabsContent>
      </Tabs>
    </>
  );
}
