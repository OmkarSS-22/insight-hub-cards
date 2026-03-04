import {
  Users,
  ShoppingCart,
  FileText,
  ShieldCheck,
  FileSignature,
  Search,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import ModuleCard from "@/components/dashboard/ModuleCard";

const topStats = [
  { label: "Active Vendors", value: "248", icon: TrendingUp },
  { label: "Pending Actions", value: "37", icon: AlertCircle },
  { label: "Completed", value: "142", icon: CheckCircle2 },
  { label: "Avg. Time", value: "2.4d", icon: Clock },
];

const modules = [
  {
    title: "Vendor Onboarding",
    description: "New vendor registrations",
    icon: <Users className="w-4 h-4 text-accent-foreground" />,
    href: "/vendor-onboarding",
    status: { label: "12 Pending", type: "info" as const },
    metrics: [
      { label: "In Progress", value: 18, trend: "up" as const, trendValue: "3" },
      { label: "Approved", value: 124 },
      { label: "Avg. Time", value: "5.2d", trend: "down" as const, trendValue: "12%" },
    ],
  },
  {
    title: "Order Management",
    description: "Purchase orders & fulfillment",
    icon: <ShoppingCart className="w-4 h-4 text-accent-foreground" />,
    href: "/order-management",
    status: { label: "On Track", type: "success" as const },
    metrics: [
      { label: "Open Orders", value: 47 },
      { label: "Fulfilled Today", value: 23 },
      { label: "Total Value", value: "$1.2M" },
    ],
  },
  {
    title: "Invoice Processing",
    description: "Invoice automation & workflows",
    icon: <FileText className="w-4 h-4 text-accent-foreground" />,
    href: "/invoice-processing",
    status: { label: "8 Overdue", type: "danger" as const },
    metrics: [
      { label: "Pending Approval", value: 31, trend: "up" as const, trendValue: "5" },
      { label: "Processed Today", value: 16 },
      { label: "Match Rate", value: "94%", trend: "up" as const, trendValue: "2%" },
    ],
  },
  {
    title: "Vendor Due Diligence",
    description: "Risk & compliance checks",
    icon: <ShieldCheck className="w-4 h-4 text-accent-foreground" />,
    href: "/vendor-due-diligence",
    status: { label: "3 Flagged", type: "danger" as const },
    metrics: [
      { label: "Under Review", value: 9 },
      { label: "Compliant", value: "89%", trend: "up" as const, trendValue: "4%" },
      { label: "High Risk", value: 3, trend: "down" as const, trendValue: "1" },
    ],
  },
  {
    title: "Contract Lifecycle",
    description: "Creation to renewal",
    icon: <FileSignature className="w-4 h-4 text-accent-foreground" />,
    href: "/contract-lifecycle",
    status: { label: "5 Expiring", type: "warning" as const },
    metrics: [
      { label: "Active", value: 186 },
      { label: "Expiring (30d)", value: 5 },
      { label: "Renewal Rate", value: "78%" },
    ],
  },
  {
    title: "Sourcing",
    description: "Supplier discovery & RFPs",
    icon: <Search className="w-4 h-4 text-accent-foreground" />,
    href: "/sourcing",
    status: { label: "2 RFPs", type: "info" as const },
    metrics: [
      { label: "Open RFPs", value: 2 },
      { label: "Proposals", value: 14, trend: "up" as const, trendValue: "6" },
      { label: "Avg. Savings", value: "12%", trend: "up" as const, trendValue: "3%" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Header + Stats inline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">Dashboard</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Your modules at a glance.</p>
          </div>
          <div className="flex items-center gap-4">
            {topStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-foreground tabular-nums">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
