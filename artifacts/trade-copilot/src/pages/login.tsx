import React, { useState } from "react";
import { useLocation } from "wouter";
import { useLogin, useGetMe } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getGetMeQueryKey } from "@workspace/api-client-react";
import { Activity, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const loginMutation = useLogin();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username !== "yemi" || password !== "yemi") {
      setError("Invalid credentials. Use yemi/yemi.");
      return;
    }

    loginMutation.mutate(
      { data: { username, password } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
          setLocation("/dashboard");
        },
        onError: () => {
          setError("Failed to login. Please try again.");
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 font-sans selection:bg-primary/30">
      <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-12 items-center">
        {/* Brand Side */}
        <div className="hidden md:flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-3 text-primary">
            <Activity className="w-10 h-10" />
            <span className="text-3xl font-bold tracking-tight text-foreground">TAC</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mt-4 text-foreground">
            Turn raw trade data into <span className="text-primary">performance insights.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            A precision instrument for serious traders. Log, analyze, and optimize your trading strategy with AI-driven coaching.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Real-time Analytics</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full max-w-md mx-auto bg-card border border-border rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="md:hidden flex items-center gap-3 mb-8 text-primary">
            <Activity className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-foreground">TAC</span>
          </div>

          <div className="space-y-2 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Access Terminal</h2>
            <p className="text-sm text-muted-foreground">Enter your credentials to continue.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="yemi" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background border-input focus-visible:ring-ring text-foreground placeholder:text-muted-foreground h-11"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                placeholder="yemi"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-input focus-visible:ring-ring text-foreground h-11"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button 
              type="submit" 
              className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-6"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Authenticating..." : "Sign In"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
