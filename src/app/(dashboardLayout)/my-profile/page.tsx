import { getMyProfile } from "./_actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Shield, Edit, Camera } from "lucide-react";

export default async function MyProfilePage() {
    const response = await getMyProfile();
    const user = response?.data;

    if (!user || !response.success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <div className="h-16 w-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                    <Shield size={32} />
                </div>
                <div className="text-center">
                    <p className="text-slate-900 font-bold text-lg">Failed to load profile</p>
                    <p className="text-slate-500 text-sm">Please try again later or contact support.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-8 max-w-5xl mx-auto font-jakarta">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-3xl font-bold text-slate-900">
                    My <span className="text-[#EAB308]">Profile</span>
                </h1>
                <p className="text-sm text-slate-500">Manage your account settings and preferences.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {/* Left Column: Avatar & Quick Actions */}
                <Card className="md:col-span-1 border-slate-100 shadow-sm overflow-hidden h-fit transition-all hover:shadow-md">
                    <CardContent className="p-0">
                        <div className="h-24 bg-gradient-to-r from-[#EAB308]/20 to-[#EAB308]/10 w-full" />
                        <div className="px-6 pb-8 -mt-12 flex flex-col items-center text-center space-y-4">
                            <div className="relative group">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-lg ring-1 ring-slate-100 transition-transform group-hover:scale-[1.02]">
                                    <AvatarImage src="" alt={user.name} />
                                    <AvatarFallback className="bg-slate-900 text-white text-2xl font-bold">
                                        {user.name?.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full border border-slate-200 shadow-xl text-slate-600 hover:text-[#EAB308] hover:scale-110 transition-all cursor-pointer">
                                    <Camera size={16} />
                                </button>
                            </div>

                            <div className="space-y-1">
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">{user.name}</h2>
                                <Badge variant="secondary" className="bg-[#EAB308]/10 text-[#EAB308] border-none font-black uppercase text-[10px] tracking-[0.1em] px-3 py-1">
                                    {user.role}
                                </Badge>
                            </div>

                            <Separator className="bg-slate-50" />

                            <div className="w-full pt-2">
                                <Button className="w-full bg-slate-900 text-white font-black h-11 hover:bg-[#EAB308] transition-all rounded-xl shadow-lg shadow-slate-200 uppercase text-xs tracking-widest">
                                    <Edit size={16} className="mr-2" /> Edit Profile
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Column: Detailed Info */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-50">
                            <CardTitle className="text-lg font-black text-slate-900 flex items-center gap-2">
                                <User size={18} className="text-[#EAB308]" />
                                <span className="uppercase tracking-tight">Personal Information</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <div className="grid gap-8 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                        Full Name
                                    </p>
                                    <p className="text-sm font-bold text-slate-700 bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">{user.name}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                        Email Address
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50/50 p-3 rounded-lg border border-slate-100/50 overflow-hidden">
                                        <Mail size={14} className="text-[#EAB308] shrink-0" />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                        User ID
                                    </p>
                                    <p className="text-xs font-mono text-slate-400 bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">{user.id}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                        System Role
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">
                                        <Shield size={14} className="text-[#EAB308]" />
                                        {user.role}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-100 shadow-sm bg-slate-50/20 border-dashed border-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-1 bg-[#EAB308]/10 text-[#EAB308] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity">
                            <Shield size={12} />
                        </div>
                        <CardContent className="p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#EAB308] transition-transform group-hover:rotate-6">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Security & Privacy</p>
                                    <p className="text-xs text-slate-500 font-medium">Protect your cinematic account with a strong password.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="h-11 px-8 font-black border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-xl transition-all shadow-sm uppercase text-[10px] tracking-widest">
                                Change Password
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}