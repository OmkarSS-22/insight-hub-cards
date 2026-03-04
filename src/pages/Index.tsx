import {
  Users,
  ShoppingCart,
  FileText,
  ShieldCheck,
  FileSignature,
  Search,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ModuleCard from "@/components/dashboard/ModuleCard";

const modules = [
  {
    title: "Vendor Onboarding",
    description: "Track and manage new vendor registrations",
    icon: <Users className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/vendor-onboarding",
    status: { label: "12 Pending", variant: "secondary" as const },
    metrics: [
      { label: "In Progress", value: 18, trend: "up" as const, trendValue: "3 this week" },
      { label: "Approved", value: 124 },
      { label: "Avg. Onboarding Time", value: "5.2 days", trend: "down" as const, trendValue: "12%" },
    ],
  },
  {
    title: "Order Management",
    description: "Monitor purchase orders and fulfillment",
    icon: <ShoppingCart className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/order-management",
    status: { label: "On Track", variant: "default" as const },
    metrics: [
      { label: "Open Orders", value: 47, trend: "neutral" as const, trendValue: "stable" },
      { label: "Fulfilled Today", value: 23 },
      { label: "Total Value", value: "$1.2M" },
    ],
  },
  {
    title: "Invoice Processing",
    description: "Automate and track invoice workflows",
    icon: <FileText className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/invoice-processing",
    status: { label: "8 Overdue", variant: "destructive" as const },
    metrics: [
      { label: "Pending Approval", value: 31, trend: "up" as const, trendValue: "5 new" },
      { label: "Processed Today", value: 16 },
      { label: "Match Rate", value: "94%", trend: "up" as const, trendValue: "2%" },
    ],
  },
  {
    title: "Vendor Due Diligence",
    description: "Risk assessment and compliance checks",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/vendor-due-diligence",
    status: { label: "3 Flagged", variant: "destructive" as const },
    metrics: [
      { label: "Under Review", value: 9 },
      { label: "Compliant", value: "89%", trend: "up" as const, trendValue: "4%" },
      { label: "High Risk", value: 3, trend: "down" as const, trendValue: "1" },
    ],
  },
  {
    title: "Contract Lifecycle",
    description: "Manage contracts from creation to renewal",
    icon: <FileSignature className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/contract-lifecycle",
    status: { label: "5 Expiring", variant: "secondary" as const },
    metrics: [
      { label: "Active Contracts", value: 186 },
      { label: "Expiring (30d)", value: 5, trend: "neutral" as const, trendValue: "on track" },
      { label: "Renewal Rate", value: "78%" },
    ],
  },
  {
    title: "Sourcing",
    description: "Strategic sourcing and supplier discovery",
    icon: <Search className="w-5 h-5 text-primary" />,
    accentColor: "gradient-blue",
    href: "/sourcing",
    status: { label: "2 Active RFPs", variant: "default" as const },
    metrics: [
      { label: "Open RFPs", value: 2 },
      { label: "Proposals Received", value: 14, trend: "up" as const, trendValue: "6 new" },
      { label: "Avg. Savings", value: "12%", trend: "up" as const, trendValue: "3%" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
