import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

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
  accentColor: string;
  metrics: MetricItem[];
  status?: { label: string; variant: "default" | "secondary" | "destructive" | "outline" };
  href: string;
}

const ModuleCard = ({ title, description, icon, accentColor, metrics, status, href }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative cursor-pointer rounded-2xl bg-card border border-border/60 p-6 
        transition-all duration-300 hover:shadow-blue-lg hover:-translate-y-1 hover:border-primary/20 overflow-hidden"
      onClick={() => navigate(href)}
    >
      {/* Top gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${accentColor} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl gradient-blue-subtle border border-primary/10">
          {icon}
        </div>
        {status && (
          <Badge variant={status.variant} className="text-[11px] font-medium">
            {status.label}
          </Badge>
        )}
      </div>

      <h3 className="text-base font-semibold text-card-foreground mb-0.5">{title}</h3>
      <p className="text-xs text-muted-foreground mb-5">{description}</p>

      <div className="space-y-2.5">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{metric.label}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-card-foreground">{metric.value}</span>
              {metric.trend && metric.trendValue && (
                <span
                  className={`text-[11px] font-medium ${
                    metric.trend === "up"
                      ? "text-success"
                      : metric.trend === "down"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→"} {metric.trendValue}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between">
        <span className="text-xs font-semibold text-primary group-hover:underline">View Details</span>
        <div className="w-7 h-7 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground 
          flex items-center justify-center transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
