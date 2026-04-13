import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, FileText } from "lucide-react";

export function PendingCasesCard({ item }) {
  return (
    <Card
      key={item.id}
      className="w-full p-6 shadow-sm transition-all animate-in fade-in duration-300 relative"
    >
      <div className="flex items-center gap-4">
        <img
          className="aspect-square size-32 rounded-md object-cover"
          src={item.patient_image}
          alt={item.patient_name}
        />
        <div className="flex-1 space-y-2">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-slate-900">
              {item.patient_name}
            </h3>
            <Badge
              variant="outline"
              className="ml-2 rounded-md font-normal leading-none"
            >
              {item.patient_age + " yrs"}, {item.patient_gender}
            </Badge>
          </div>

          <p className="text-[#4A5565] text-sm font-normal">
            {"AI Diagnosis: " + item.ai_diagnosis}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="medium"
              className="rounded-md font-normal leading-none uppercase"
            >
              {item.ai_severity}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-md font-normal leading-none lowercase"
            >
              {item.ai_confidence + " Confidence"}
            </Badge>
            <div className="flex items-center gap-1 text-[#4A5565]">
              <Clock className="size-4" />
              <span className="text-slate-500 text-xs">
                {item.submitted_on}
              </span>
            </div>
          </div>
          <Button variant="default" size="sm">
            <FileText className="size-4" />
            Review Case
          </Button>
        </div>
      </div>
      <Badge
        variant="pending"
        className="rounded-md font-normal leading-none lowercase absolute top-4 right-4 leading-1"
      >
        pending
      </Badge>
    </Card>
  );
}
