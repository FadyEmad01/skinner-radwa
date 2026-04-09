"use client";

import { ArrowLeft, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordCard() {
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
          <h2 className="text-[16px] font-medium text-gray-900">
            Forgot Password
          </h2>
        </div>

        {/* Description */}
        <p className="mt-1 text-[13px] text-gray-500 leading-relaxed mb-6">
          Enter your email address and we'll send you a verification code to
          reset your password
        </p>

        {/* Info Alert */}
        <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-[#F4F8FF] p-3 mb-6">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-black" />
          <p className="text-sm text-[#193CB8] leading-relaxed font-medium">
            A 6-digit verification code will be sent to your registered email
            address. The code will be valid for 10 minutes.
          </p>
        </div>

        {/* Form Elements */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-[13px] text-gray-900 font-medium">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="name@example.com"
              className="h-9 text-[12px]"
            />
          </div>

          
          <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
            <Mail className="h-4 w-4" />
            Send Verification Code
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-[11px] text-gray-500">
          Remember your password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in here
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
