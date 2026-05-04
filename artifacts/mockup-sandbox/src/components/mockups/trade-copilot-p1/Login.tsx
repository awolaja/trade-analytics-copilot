import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, ArrowRight, TrendingUp } from "lucide-react";

export function Login() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 flex items-center justify-center p-6 font-sans selection:bg-[#ff4500]/30">
      <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-12 items-center">
        {/* Brand Side */}
        <div className="hidden md:flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-3 text-[#ff4500]">
            <Activity className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tight text-white">TAC</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mt-4">
            Turn raw trade data into <span className="text-[#ff4500]">performance insights.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            A precision instrument for serious traders. Log, analyze, and optimize your trading strategy with AI-driven coaching.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
              <TrendingUp className="w-4 h-4 text-[#ff4500]" />
              <span>Real-time Analytics</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full max-w-md mx-auto bg-[#121214] border border-[#27272a] rounded-xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4500]/20 via-[#ff4500] to-[#ff4500]/20" />
          
          <div className="md:hidden flex items-center gap-3 mb-8 text-[#ff4500]">
            <Activity className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-white">TAC</span>
          </div>

          <div className="space-y-2 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Access Terminal</h2>
            <p className="text-sm text-zinc-400">Enter your credentials to continue.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="trader@example.com" 
                className="bg-[#09090b] border-[#27272a] focus-visible:ring-[#ff4500] text-zinc-100 placeholder:text-zinc-600 h-11"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Password</Label>
                <a href="#" className="text-xs text-[#ff4500] hover:text-[#ff4500]/80 transition-colors">Forgot password?</a>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="bg-[#09090b] border-[#27272a] focus-visible:ring-[#ff4500] text-zinc-100 h-11"
              />
            </div>

            <Button className="w-full h-11 bg-[#ff4500] hover:bg-[#e03d00] text-white font-medium mt-6">
              Sign In <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#27272a] text-center">
            <p className="text-sm text-zinc-400">
              Don't have an account? <a href="#" className="text-white hover:text-[#ff4500] font-medium transition-colors">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
