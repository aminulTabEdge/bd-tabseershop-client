"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  Settings,
  PlusSquare,
} from "lucide-react";

const adminRoutes = [
  { path: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
  {
    path: "/dashboard/all-products",
    label: "All Products",
    icon: <Package size={20} />,
  },
  {
    path: "/dashboard/add-product",
    label: "Add Product",
    icon: <PlusSquare size={20} />,
  },
  {
    path: "/dashboard/orders",
    label: "Orders",
    icon: <ShoppingCart size={20} />,
  },
  {
    path: "/dashboard/sold-products",
    label: "Sold Products",
    icon: <Package size={20} />,
  },
  { path: "/dashboard/users", label: "Users", icon: <Users size={20} /> },
  {
    path: "/dashboard/settings",
    label: "Settings",
    icon: <Settings size={20} />,
  },
];

const AdminNavbar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {adminRoutes.map((route) => (
          <Link key={route.path} href={route.path}>
            <div
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                pathname === route.path ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {route.icon}
              <span>{route.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminNavbar;
