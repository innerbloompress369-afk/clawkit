import type { AgentInfo, ConnectorInfo, WorkflowInfo } from "@/lib/types";
import { Bot, Plug, GitBranch } from "lucide-react";

const routerTierColors: Record<string, string> = {
  SIMPLE: "bg-emerald-900/50 text-emerald-300",
  MEDIUM: "bg-blue-900/50 text-blue-300",
  COMPLEX: "bg-purple-900/50 text-purple-300",
  REASONING: "bg-orange-900/50 text-orange-300",
};

interface ArchitectureDiagramProps {
  agents: AgentInfo[];
  connectors: ConnectorInfo[];
  workflows: WorkflowInfo[];
}

export default function ArchitectureDiagram({ agents, connectors, workflows }: ArchitectureDiagramProps) {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4"><Bot size={16} /> Agents</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{agent.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${routerTierColors[agent.routerTier]}`}>{agent.routerTier}</span>
              </div>
              <p className="text-gray-500 text-xs">{agent.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4"><Plug size={16} /> Connectors</h4>
        <div className="flex flex-wrap gap-3">
          {connectors.map((conn) => (
            <div key={conn.name} className="bg-[#0a0a0f] border border-gray-800 rounded-xl px-4 py-3">
              <span className="font-medium text-sm">{conn.name}</span>
              <p className="text-gray-500 text-xs mt-1">{conn.purpose}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4"><GitBranch size={16} /> Workflows</h4>
        <div className="space-y-3">
          {workflows.map((wf) => (
            <div key={wf.name} className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{wf.name}</span>
                <span className="text-xs text-gray-500">Trigger: {wf.trigger}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {wf.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{step}</span>
                    {i < wf.steps.length - 1 && <span className="text-blue-500 text-xs">&rarr;</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
