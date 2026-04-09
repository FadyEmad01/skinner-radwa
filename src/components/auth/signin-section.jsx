import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PasswordInput from "../ui/PasswordInput";
import { FeatureCard } from "./featureCard";
import { ProfessionalCard } from "./professionalCard";

export function SignInCard() {
  return (
    <Card className="w-full max-w-sm rounded-lg border border-gray-200 shadow-sm ">
      <CardContent className="">
        <h2 className="text-sm font-semibold text-gray-800">Sign In</h2>
        <p className="mt-1 text-[11px] text-gray-500">
          Enter your credentials to access your account
        </p>

        <div className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="role" className="text-[11px] text-gray-700">
              I am a
            </Label>
            <Select defaultValue="patient">
              <SelectTrigger className="h-9 text-xs w-full">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="p-1">
                <SelectItem value="patient">Patient</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[11px] text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="h-9 text-xs"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-[11px] text-gray-700">
              Password
            </Label>
            <PasswordInput className="text-xs"/>
          </div>

          <Button className="h-9 w-full bg-[#0B0B1F] text-xs hover:bg-[#16162b]">
            Sign In
          </Button>
        </div>

        <div className="mt-4 text-center text-[11px] text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Register here
          </a>
        </div>

        <div className="mt-2 text-center">
          <a href="#" className="text-[11px] text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SignInSection() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto grid max-w-4xl gap-10 px-6 md:grid-cols-2 md:items-start">
        {/* Left */}
        <div className="space-y-4">
          <FeatureCard />
          <ProfessionalCard />
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <SignInCard />
        </div>
      </div>
    </section>
  );
}
