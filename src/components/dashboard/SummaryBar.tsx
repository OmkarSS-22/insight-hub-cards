import { TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const stats = [
  { label: "Active Vendors", value: "248", icon: TrendingUp, color: "text-primary" },
  { label: "Pending Actions", value: "37", icon: AlertTriangle, color: "text-warning" },
  { label: "Completed This Month", value: "142", icon: CheckCircle2, color: "text-success" },
  { label: "Avg. Processing Time", value: "2.4d", icon: Clock, color: "text-info" },
];

const SummaryBar = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60"
        >
          <stat.icon className={`w-5 h-5 ${stat.color} shrink-0`} />
          <div>
            <p className="text-xl font-bold text-card-foreground leading-none">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryBar;
