import React from 'react';
import { Card } from '@/components/ui/card';
import { Server, Shield, Zap, Globe, Cpu, ArrowDown } from 'lucide-react';

export function ArchitectureSection() {
  const nodes = [
    { title: 'Browser Client', desc: 'React 19 / Next.js Client Engine', icon: Globe },
    { title: 'Cloudflare CDN', desc: 'Proxy, DDoS Shield & SSL', icon: Shield },
    { title: 'Coolify Orchestrator', desc: 'Hetzner VPS Docker Deploy', icon: Server },
    { title: 'Next.js 16 Standalone', desc: 'App Router Server Components', icon: Cpu },
    { title: 'Supabase / Resend / GitHub', desc: 'PostgreSQL, Email & Telemetry APIs', icon: Zap },
  ];

  return (
    <Card className="flex flex-col gap-6 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white border-b border-[#334155] pb-3">
        System Deployment & Service Architecture
      </h3>
      <div className="flex flex-col items-center gap-3">
        {nodes.map((node, index) => (
          <React.Fragment key={node.title}>
            <div className="w-full p-4 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2563EB]/10 text-[#38BDF8]">
                  <node.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{node.title}</h4>
                  <p className="text-xs text-[#CBD5E1]">{node.desc}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#38BDF8] bg-[#2563EB]/10 px-2.5 py-1 rounded-full">
                Layer {index + 1}
              </span>
            </div>
            {index < nodes.length - 1 && (
              <ArrowDown className="h-4 w-4 text-[#38BDF8] my-0.5" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
}
