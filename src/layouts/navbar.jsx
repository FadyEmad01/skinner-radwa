import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[linear-gradient(90deg,#DBE7FE_0%,#F1E8FF_100%)] px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            <Activity/>
          </div>
          <span className="text-4 font-semibold text-black md:text-[18px]">
            Skinner
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-10 text-black text-[18px] font-normal">
          <a href="#" className="transition hover:opacity-70">
            Contact Us
          </a>
          <a href="#" className="transition hover:opacity-70 hidden md:block">
            Contact Us
          </a>
          <a href="#" className="transition hover:opacity-70 hidden md:block">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}