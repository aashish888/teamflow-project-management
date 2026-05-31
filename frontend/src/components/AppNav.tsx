import Link from "next/link";

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Tasks",
    href: "/tasks",
  },
  {
    label: "Team",
    href: "/team-members",
  },
];

export function AppNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/dashboard" className="text-xl font-bold text-slate-950">
          TeamFlow
        </Link>

        <nav className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}