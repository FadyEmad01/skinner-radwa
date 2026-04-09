"use client";

import { useState } from "react";
// import { Download, Eye, Info } from "lucide-react";
import {
  Download,
  Image as ImageIcon,
  Upload as UploadIcon,
  X,
  Info,
  AlertCircle as AlertCircleIcon,
  Upload,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PasswordInput from "../ui/PasswordInput";
import { useFileUpload } from "@/hooks/use-file-upload";

export default function RegisterCard() {
  const [role, setRole] = useState("patient");

  const maxSizeMB = 2;
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  });

  const previewUrl = files[0]?.preview || null;

  return (
    <Card className="w-full max-w-sm rounded-lg border border-gray-200 shadow-sm">
      <CardContent className="">
        <h2 className="text-[16px] font-semibold text-gray-900">
          Create an Account
        </h2>
        <p className="mt-1 text-[12px] text-gray-500">
          Register as a patient, healthcare provider, or admin
        </p>

        <Tabs defaultValue="patient" className="mt-5" onValueChange={setRole}>
          <TabsList className="grid h-10 w-full grid-cols-3 bg-[#ECECF0] p-1">
            <TabsTrigger
              value="patient"
              className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Patient
            </TabsTrigger>
            <TabsTrigger
              value="doctor"
              className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Doctor
            </TabsTrigger>
            <TabsTrigger
              value="admin"
              className="text-[12px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Admin
            </TabsTrigger>
          </TabsList>

          {/* Patient Tab */}
          <TabsContent value="patient" className="mt-5">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Full Name</Label>
                  <Input placeholder="John Doe" className="h-9 text-[12px]" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Email</Label>
                  <Input
                    placeholder="name@example.com"
                    className="h-9 text-[12px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Phone Number</Label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="h-9 text-[12px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Age</Label>
                  <Input placeholder="25" className="h-9 text-[12px]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Gender</Label>
                  <Select>
                    <SelectTrigger className="h-9 text-xs w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="p-1">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Address</Label>
                  <Input placeholder="25" className="h-9 text-[12px]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Confirm Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 p-3 text-[11px] text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  By registering, you agree to our Terms of Service and Privacy
                  Policy. Your health data will be handled in compliance with
                  HIPAA regulations.
                </p>
              </div>

              <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
                Register as Patient
              </Button>
            </div>
          </TabsContent>

          {/* Doctor Tab */}
          <TabsContent value="doctor" className="mt-5">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Full Name</Label>
                  <Input
                    placeholder="Dr. Jane Smith"
                    className="h-9 text-[12px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Email</Label>
                  <Input
                    placeholder="doctor@hospital.com"
                    className="h-9 text-[12px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Phone Number</Label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="h-9 text-[12px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Age</Label>
                  <Input placeholder="35" className="h-9 text-[12px]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Gender</Label>
                  <Select>
                    <SelectTrigger className="h-9 text-xs w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="p-1">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Upload ID</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      {/* <Input
                        readOnly
                        value={image ? "Image selected" : ""}
                        placeholder="Click to upload"
                        className="h-9 text-[12px] cursor-pointer"
                      /> */}
                      <div className="relative">
                        <Input
                          placeholder="Upload your ID"
                          className="h-9 text-[12px] pr-10"
                          readOnly
                        />

                        <Download className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      </div>
                    </DialogTrigger>

                    {/* Modal */}

                    <DialogContent className="sm:max-w-lg">
                      <div className="flex flex-col gap-5">
                        {/* HEADER */}
                        <div className="text-center">
                          <h2 className="text-xl font-bold text-[#193CB8]">
                            Upload Doctor ID
                          </h2>
                          <p className="text-xs text-gray-500">
                            Supported formats: JPG, PNG
                          </p>
                        </div>

                        {/* DROPZONE */}
                        <div
                          className="relative flex min-h-56 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-blue-50/40 p-6 text-center transition hover:border-[#193CB8]"
                          data-dragging={isDragging || undefined}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                        >
                          {/* hidden input */}
                          <input {...getInputProps()} className="sr-only" />

                          {/* icon */}
                          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                            <Upload className="h-5 w-5 text-[#193CB8]" />
                          </div>

                          <p className="text-sm font-medium text-[#193CB8]">
                            Drag files here or Click to upload
                          </p>

                          <button
                            type="button"
                            onClick={openFileDialog}
                            className="mt-4 rounded-md border border-[#193CB8] px-4 py-1.5 text-xs text-[#193CB8] hover:bg-[#193CB8] hover:text-white"
                          >
                            Select File
                          </button>

                          <p className="mt-2 text-[11px] text-gray-500">
                            PNG, JPG, PDF up to 10MB
                          </p>
                        </div>

                        {/* PREVIEW */}
                        {files[0]?.preview && (
                          <div className="relative w-fit">
                            <img
                              src={files[0].preview}
                              alt="preview"
                              className="h-28 w-44 rounded-md object-cover shadow-md"
                            />

                            <button
                              type="button"
                              onClick={() => removeFile(files[0].id)}
                              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
                            >
                              <X className="h-3 w-3 text-gray-600" />
                            </button>
                          </div>
                        )}

                        {/* ERROR */}
                        {errors?.length > 0 && (
                          <p className="text-center text-xs text-red-500">
                            {errors[0]}
                          </p>
                        )}

                        {/* DONE BUTTON */}
                        <button
                          type="button"
                          className="w-full rounded-md bg-black py-2 text-sm text-white hover:bg-gray-900"
                          onClick={() =>
                            document
                              .querySelector('[data-state="open"]')
                              ?.click()
                          }
                        >
                          Done
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Specialization</Label>
                <Select>
                  <SelectTrigger className="h-9 text-xs w-full">
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent className="p-1">
                    <SelectItem value="dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="general">General Physician</SelectItem>
                    <SelectItem value="surgeon">Surgeon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Clinic Address</Label>
                <Input
                  placeholder="clinic address"
                  className="h-9 text-[12px]"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Confirm Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 p-3 text-[11px] text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Your registration will be reviewed by our admin team. Account
                  activation typically takes 24–48 hours after credential
                  verification.
                </p>
              </div>

              <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
                Register as Doctor
              </Button>
            </div>
          </TabsContent>

          {/* Admin Tab */}
          <TabsContent value="admin" className="mt-5">
            <div className="space-y-4">
              <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-3 text-[11px] text-amber-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <h6 className="font-bold">Administrator Registration:</h6>
                  <p>
                    Admin accounts require authorization and may be subject to
                    additional approval steps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Full Name</Label>
                  <Input
                    placeholder="Dr. Jane Smith"
                    className="h-9 text-[12px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Email</Label>
                  <Input
                    placeholder="doctor@hospital.com"
                    className="h-9 text-[12px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Phone Number</Label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="h-9 text-[12px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Age</Label>
                  <Input placeholder="35" className="h-9 text-[12px]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Gender</Label>
                  <Select>
                    <SelectTrigger className="h-9 text-xs w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="p-1">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[12px]">Organization ID</Label>
                  <Input placeholder="ORG123456" className="h-9 text-[12px]" />
                  <div className="text-[#6A7282] text-xs">
                    We&apos;ll send updates to this address.
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Department</Label>
                <Select>
                  <SelectTrigger className="h-9 text-xs w-full">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="p-1">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Admin Authorization Code</Label>
                <Input
                  placeholder="Enter your admin authorization code"
                  className="h-9 text-[12px]"
                />
                <div className="text-[#6A7282] text-xs">
                  Contact your system administrator for the authorization code
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[12px]">Confirm Password</Label>
                <PasswordInput className="text-xs" />
              </div>

              <div className="flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 p-3 text-[11px] text-blue-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Admin accounts require authorization and may be subject to
                  additional approval steps.
                </p>
              </div>

              <Button className="h-10 w-full bg-[#0B0B1F] text-[12px] hover:bg-[#16162b]">
                Register as Admin
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 text-center text-[11px] text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in here
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
