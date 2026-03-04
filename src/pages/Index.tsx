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
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Your modules at a glance.</p>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {topStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-card border border-border/80 px-4 py-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <p className="text-lg font-semibold text-card-foreground leading-none tabular-nums">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Module cards — asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
