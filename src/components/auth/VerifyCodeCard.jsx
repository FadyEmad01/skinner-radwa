"use client";

import { ArrowLeft, RefreshCw, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

export default function VerifyCodeCard() {
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
          <h2 className="text-[16px] font-medium text-gray-900">Verify Code</h2>
        </div>

        {/* Description */}
        <p className="mt-1 text-[13px] text-gray-500 leading-relaxed mb-6">
          Enter the 6-digit verification code sent to kareemsaid8688@gmail.com
        </p>

        {/* Info Alert */}
        <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-[#F4F8FF] p-3 mb-6">
          <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-black" />
          <p className="text-sm text-[#193CB8] leading-relaxed font-medium">
            Code expires in:
            <br />
            <span className="font-bold text-[#193CB8]">09:45</span>
          </p>
        </div>

        {/* Form Elements */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex w-full justify-center py-2">
              <InputOTP maxLength={6}>
                <div className="flex items-center gap-3">
                  {" "}
                  {/* Container to manage spacing around the separator */}
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot index={0} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                    <InputOTPSlot index={1} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                    <InputOTPSlot index={2} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                    <InputOTPSlot index={3} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                    <InputOTPSlot index={4} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                    <InputOTPSlot index={5} className="rounded-md border border-[#D1D5DC] border-[1.5px]" />
                  </InputOTPGroup>
                </div>
              </InputOTP>
            </div>
          </div>

          <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
            <ShieldCheck className="h-4 w-4" />
            Send Verification Code
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1 flex-wrap">
          Didn't receive the code?{" "}
          <a href="#" className="text-blue-600 hover:underline flex items-center justify-center gap-1">
            <RefreshCw className="h-4 w-4" />
            Resend Code
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
