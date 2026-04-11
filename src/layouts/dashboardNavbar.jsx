// import { Button } from "@/components/ui/button";
// import { Activity, LogOut } from "lucide-react";

// export default function DashboardNavbar() {
//   return (
//     <nav className="w-full bg-white px-8 py-5 border-b border-[#E5E7EB]">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
//         {/* Left side */}
//         <div className="flex items-center gap-3">
//           <div className="flex size-10 items-center justify-center rounded-md bg-[#DBEAFE] text-[#155DFC] text-sm font-semibold">
//             <Activity />
//           </div>
//           <div className="flex flex-col ">
//             <span className="text-4 font-bold text-black md:text-[18px]">
//               Skinner
//             </span>
//             <span className="text-4 font-normal text-black md:text-[14px]">
//               Patient Portal
//             </span>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-10 text-black text-[18px] font-normal">
//             <div className="flex flex-col items-end">
//                 <span className="text-4 font-semibold text-black md:text-base">
//                     Dr. John Doe
//                 </span>
//                 <span className="text-4 font-normal text-black md:text-[12px]">
//                     Dermatologist
//                 </span>
//             </div>
//           <Button size="lg" variant={"outline"}>
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Button } from "@/components/ui/button";
import { Activity, LogOut, Shield } from "lucide-react";

export default function DashboardNavbar({
  role = "patient",
  name,
  email,
  specialization,
}) {
  const config = {
    doctor: {
      title: "Doctor Portal",
      bg: "bg-[#DBEAFE]",
      color: "text-[#155DFC]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M11 2V4" stroke="#155DFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 2V4" stroke="#155DFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 3H4C2.9 3 2 3.9 2 5V9C2 12.3 4.7 15 8 15C11.3 15 14 12.3 14 9V5C14 3.9 13.1 3 12 3H11" stroke="#155DFC" strokeWidth="2"/>
        </svg>
      ),
      getRight: () => (
        <>
          <span className="font-semibold text-sm md:text-base line-clamp-1 max-w-[120px] md:max-w-[180px]">
            {name || "Dr. Name"}
          </span>
          <span className="font-normal text-xs md:text-[12px] text-gray-500 line-clamp-1 max-w-[120px] md:max-w-[180px]">
            {specialization || "Specialization"}
          </span>
        </>
      ),
    },

    patient: {
      title: "Patient Portal",
      bg: "bg-[#DBEAFE]",
      color: "text-[#155DFC]",
      icon: <Activity size={20} />,
      getRight: () => (
        <>
          <span className="font-semibold text-sm md:text-base line-clamp-1 max-w-[120px] md:max-w-[180px]">
            {name || "User Name"}
          </span>
          <span className="font-normal text-xs md:text-[12px] text-gray-500 line-clamp-1 max-w-[120px] md:max-w-[180px]">
            {email || "user@email.com"}
          </span>
        </>
      ),
    },

    admin: {
      title: "Admin Portal",
      bg: "bg-[#F3E8FF]",
      color: "text-[#9810FA]",
      icon: <Shield size={20} />,
      getRight: () => (
        <>
          <span className="font-semibold text-sm md:text-base line-clamp-1 max-w-[120px] md:max-w-[180px]">
            {name || "Admin"}
          </span>
          <span className="font-normal text-xs md:text-[12px] text-gray-500 line-clamp-1 max-w-[120px] md:max-w-[180px]">
            Administrator
          </span>
        </>
      ),
    },
  };

  const current = config[role];

  return (
    <nav className="w-full bg-white px-4 md:px-8 py-4 md:py-5 border-b border-[#E5E7EB]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div
            className={`flex size-9 md:size-10 items-center justify-center rounded-md ${current.bg} ${current.color}`}
          >
            {current.icon}
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm md:text-[18px] truncate">
              Skinner
            </span>
            <span className="font-normal text-xs md:text-[14px] text-gray-600 truncate">
              {current.title}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-10 text-black">

          <div className="flex flex-col items-end min-w-0">
            {current.getRight()}
          </div>

          <Button
            size="sm"
            className="md:size-lg"
            variant="outline"
          >
            <LogOut className="mr-1 md:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
