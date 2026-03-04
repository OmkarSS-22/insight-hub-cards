import { TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const stats = [
  { label: "Active Vendors", value: "248", icon: TrendingUp },
  { label: "Pending Actions", value: "37", icon: AlertTriangle },
  { label: "Completed This Month", value: "142", icon: CheckCircle2 },
  { label: "Avg. Processing Time", value: "2.4d", icon: Clock },
];

const DashboardHeader = () => {
  return (
    <div className="gradient-blue rounded-2xl p-8 pb-24 mb-[-3.5rem] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-primary-foreground/5" />
      <div className="absolute bottom-[-60px] left-[20%] w-64 h-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute top-[20px] right-[30%] w-20 h-20 rounded-full bg-primary-foreground/5" />

      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-primary-foreground mb-1">Dashboard</h1>
        <p className="text-primary-foreground/70 text-sm">
          Overview of all modules and key metrics at a glance.
        </p>
      </div>

      {/* Summary stats row - glass cards overlapping the gradient */}
      <div className="relative z-10 mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass rounded-xl p-4 flex items-center gap-3 border border-primary-foreground/10"
          >
            <div className="p-2 rounded-lg bg-primary-foreground/10">
              <stat.icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xl font-bold text-primary-foreground leading-none">{stat.value}</p>
              <p className="text-[11px] text-primary-foreground/60 mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
