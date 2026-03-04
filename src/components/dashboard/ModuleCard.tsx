import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MetricItem {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  metrics: MetricItem[];
  status?: { label: string; type: "info" | "warning" | "success" | "danger" };
  href: string;
}

const statusStyles = {
  info: "bg-accent text-accent-foreground",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
  danger: "bg-destructive/10 text-destructive",
};

const ModuleCard = ({ title, description, icon, metrics, status, href }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="group text-left w-full rounded-xl bg-card border border-border/80 px-4 py-3.5
        transition-all duration-200 hover:shadow-sm hover:border-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={() => navigate(href)}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-semibold text-card-foreground truncate leading-tight">{title}</h3>
          <p className="text-[11px] text-muted-foreground truncate">{description}</p>
        </div>
        {status && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${statusStyles[status.type]}`}>
            {status.label}
          </span>
        )}
      </div>

      <div className="space-y-1">
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

      <div className="mt-2.5 flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-[11px] font-medium">Open</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </button>
  );
};

export default ModuleCard;
