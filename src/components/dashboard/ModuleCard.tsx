import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MetricItem {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

interface ProgressItem {
  label: string;
  value: number; // 0-100
  color?: "primary" | "success" | "warning" | "destructive";
}

interface ActivityItem {
  text: string;
  time: string;
}

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  metrics: MetricItem[];
  progress?: ProgressItem[];
  activity?: ActivityItem[];
  status?: { label: string; type: "info" | "warning" | "success" | "danger" };
  href: string;
}

const statusStyles = {
  info: "bg-accent text-accent-foreground",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
  danger: "bg-destructive/10 text-destructive",
};

const progressColors = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
};

const ModuleCard = ({ title, description, icon, metrics, progress, activity, status, href }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="group text-left w-full h-full rounded-2xl bg-card border border-border/80 p-4 flex flex-col
        transition-all duration-200 hover:shadow-md hover:border-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={() => navigate(href)}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-card-foreground truncate">{title}</h3>
          <p className="text-xs text-muted-foreground truncate">{description}</p>
        </div>
        {status && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${statusStyles[status.type]}`}>
            {status.label}
          </span>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-1.5">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{metric.label}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-card-foreground tabular-nums">{metric.value}</span>
              {metric.trend && metric.trendValue && (
                <span
                  className={`text-[10px] font-medium ${
                    metric.trend === "up" ? "text-success" : metric.trend === "down" ? "text-destructive" : "text-muted-foreground"
                  }`}
                >
                  {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "·"}{metric.trendValue}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      {progress && progress.length > 0 && (
        <div className="mt-3 space-y-2">
          <div className="border-t border-border/60 pt-2">
            {progress.map((p, i) => (
              <div key={i} className="mb-1.5 last:mb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-muted-foreground">{p.label}</span>
                  <span className="text-[10px] font-semibold text-card-foreground tabular-nums">{p.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${progressColors[p.color || "primary"]}`}
                    style={{ width: `${p.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent activity */}
      {activity && activity.length > 0 && (
        <div className="mt-3 flex-1">
          <div className="border-t border-border/60 pt-2">
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Recent</span>
            <div className="mt-1.5 space-y-1.5">
              {activity.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <span className="text-[11px] text-card-foreground leading-tight">{item.text}</span>
                  <span className="text-[10px] text-muted-foreground shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-2 flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-[11px] font-medium">Open</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </button>
  );
};

export default ModuleCard;