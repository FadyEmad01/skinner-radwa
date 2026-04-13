import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, UserCheck, Users, Activity } from "lucide-react";

export function AnalyticsCards() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 bg-transparent">
      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Total Users</span>
            <Users className="size-4 text-[#155DFC]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">1,247</p>
            <p className="text-sm font-normal text-[#4A5565]">
              +12% from last month
            </p>
          </CardTitle>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Active Doctors</span>
            <UserCheck className="size-4 text-[#00A63E]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">89</p>
            <p className="text-sm font-normal text-[#4A5565]">
              Verified professionals
            </p>
          </CardTitle>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Pending Approvals</span>
            <Clock className="size-4 text-[#F54900]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">2</p>
            <p className="text-sm font-normal text-[#4A5565]">
              Require verification
            </p>
          </CardTitle>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">AI Analyses</span>
            <Activity className="size-4 text-[#9810FA]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">5,432</p>
            <p className="text-sm font-normal text-[#4A5565]">
              This month
            </p>
          </CardTitle>
        </CardContent>
      </Card>
    </div>
  );
}
