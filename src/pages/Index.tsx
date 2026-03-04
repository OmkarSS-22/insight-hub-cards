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
    progress: [
      { label: "Document Collection", value: 72, color: "primary" as const },
      { label: "Background Checks", value: 45, color: "warning" as const },
    ],
    activity: [
      { text: "Acme Corp submitted documents", time: "2m ago" },
      { text: "GlobalTech approved", time: "18m ago" },
      { text: "NewVend started onboarding", time: "1h ago" },
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
    progress: [
      { label: "Fulfillment Rate", value: 89, color: "success" as const },
      { label: "On-Time Delivery", value: 94, color: "primary" as const },
    ],
    activity: [
      { text: "PO-4521 shipped via FedEx", time: "5m ago" },
      { text: "PO-4519 payment received", time: "32m ago" },
      { text: "PO-4515 delivered", time: "2h ago" },
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
    progress: [
      { label: "Auto-Match Success", value: 94, color: "success" as const },
      { label: "Approval Pipeline", value: 58, color: "warning" as const },
    ],
    activity: [
      { text: "INV-8842 auto-matched to PO", time: "1m ago" },
      { text: "INV-8839 flagged for review", time: "15m ago" },
      { text: "Batch #47 processed (12 inv)", time: "1h ago" },
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
    progress: [
      { label: "Compliance Score", value: 89, color: "success" as const },
      { label: "Risk Assessment", value: 67, color: "destructive" as const },
    ],
    activity: [
      { text: "SupplyMax flagged — sanctions list", time: "8m ago" },
      { text: "TechParts passed KYC review", time: "45m ago" },
      { text: "Annual review batch started", time: "3h ago" },
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
    progress: [
      { label: "Renewals Completed", value: 78, color: "primary" as const },
      { label: "Signature Pending", value: 35, color: "warning" as const },
    ],
    activity: [
      { text: "MSA-210 signed by both parties", time: "12m ago" },
      { text: "NDA-089 renewal initiated", time: "1h ago" },
      { text: "SOW-445 sent for legal review", time: "4h ago" },
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
    progress: [
      { label: "RFP-22 Responses", value: 85, color: "primary" as const },
      { label: "RFP-23 Responses", value: 30, color: "warning" as const },
    ],
    activity: [
      { text: "3 new bids on RFP-22", time: "20m ago" },
      { text: "RFP-23 published to portal", time: "2h ago" },
      { text: "Vendor shortlist finalized", time: "5h ago" },
    ],
  },
];

const Index = () => {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-4 flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">Dashboard</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Your modules at a glance.</p>
          </div>
          <div className="flex items-center gap-2">
            {topStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-card border border-border/80 px-3 py-2">
                <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold text-card-foreground tabular-nums">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Module cards — fill remaining space */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;