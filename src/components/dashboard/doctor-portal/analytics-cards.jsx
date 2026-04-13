import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  UserCheck,
  Users,
  Activity,
  Info,
  FileText,
} from "lucide-react";

export function AnalyticsCards() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 bg-transparent">
      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Pending Reviews</span>
            <Info className="size-4 text-[#F54900]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">2</p>
            <p className="text-sm font-normal text-[#4A5565]">
              Cases awaiting review
            </p>
          </CardTitle>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Reviewed Today</span>
            <FileText className="size-4 text-[#00A63E]" />
          </CardDescription>
          <CardTitle className="">
            <p className="text-2xl font-normal">1</p>
            <p className="text-sm font-normal text-[#4A5565]">
              Cases completed
            </p>
          </CardTitle>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardContent className="flex flex-col items-start justify-between gap-4 w-full h-full">
          <CardDescription className="flex justify-between items-center gap-2 w-full">
            <span className="text-black">Total Patients</span>
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

    </div>
  );
}
