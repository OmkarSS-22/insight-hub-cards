import { LayoutDashboard } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <LayoutDashboard className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      </div>
      <p className="text-muted-foreground ml-12">
        Overview of all modules and key metrics at a glance.
      </p>
    </div>
  );
};

export default DashboardHeader;
