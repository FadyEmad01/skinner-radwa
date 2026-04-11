"use client";

import { ArrowLeft, CircleCheck, Lock, Mail, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PasswordInput from "../ui/PasswordInput";

export default function ResetPasswordCard() {
  return (
    <Card className="w-full max-w-sm rounded-xl border border-gray-200 shadow-sm p-1">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div
            className={`mt-0.5 flex size-8 aspect-square items-center justify-center rounded-lg bg-green-100`}
          >
            <Lock className="size-4 text-green-600" />
          </div>
          <h2 className="text-[16px] font-medium text-gray-900">
            Reset Password
          </h2>
        </div>

        {/* Description */}
        <p className="mt-1 text-[13px] text-gray-500 leading-relaxed mb-6">
          Create a new strong password for kareemsaid8688@gmail.com
        </p>

        {/* Info Alert */}
        <div className="flex items-start gap-3 rounded-lg border border-[#B9F8CF] bg-[#F0FDF4] p-3 mb-6">
          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-black" />
          <p className="text-sm text-[#016630] leading-relaxed font-medium">
            Your identity has been verified. Please create a new password.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-[#F4F8FF] p-3 mb-6">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-black" />
          <p className="text-sm text-[#193CB8] leading-relaxed font-medium">
            Password Requirements:
            <ul className="list-disc font-normal list-inside mt-1 text-[#193CB8]">
              <li>At least 8 characters</li>
              <li>Uppercase and lowercase letters</li>
              <li>At least one number</li>
              <li>At least one special character (!@#$%^&*)</li>
            </ul>
          </p>
        </div>

        {/* Form Elements */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-[12px]">New Password</Label>
            <PasswordInput placeholder="Enter new password" className="text-xs" />
          </div>

          <div className="space-y-1.5">
            <Label className="text-[12px]">Confirm New Password</Label>
            <PasswordInput placeholder="Confirm new password" className="text-xs" />
          </div>

          <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
            <Lock className="h-4 w-4" />
            Reset Password
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-[11px] text-gray-500">
          Changed your mind?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Return to login
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
