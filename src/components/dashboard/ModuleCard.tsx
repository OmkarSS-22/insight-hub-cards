import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  iconBg: string;
  metrics: MetricItem[];
  status?: { label: string; variant: "default" | "secondary" | "destructive" | "outline" };
  href: string;
}

const ModuleCard = ({ title, description, icon, iconBg, metrics, status, href }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60"
      onClick={() => navigate(href)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${iconBg}`}>
            {icon}
          </div>
          {status && (
            <Badge variant={status.variant} className="text-[11px]">
              {status.label}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-card-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-5">{description}</p>

        <div className="space-y-3">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-card-foreground">{metric.value}</span>
                {metric.trend && metric.trendValue && (
                  <span
                    className={`text-xs font-medium ${
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

        <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">View Details</span>
          <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
