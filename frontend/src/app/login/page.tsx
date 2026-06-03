import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-900 lg:grid-cols-[1fr_0.9fr]">
          <div className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                TeamFlow
              </p>
              <h1 className="mt-6 max-w-md text-4xl font-bold leading-tight">
                Manage projects, tasks, and teams in one focused workspace.
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold"></p>
                <p className="mt-1 text-slate-300">Active Tasks</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold"></p>
                <p className="mt-1 text-slate-300">Members</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold"></p>
                <p className="mt-1 text-slate-300">Projects</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mx-auto w-full max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Welcome back
              </p>
              <h2 className="mt-3 text-3xl font-bold">Login to TeamFlow</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Enter your details to continue to the dashboard.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="Enter password"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <input type="checkbox" className="h-4 w-4 rounded" />
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="font-medium text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                >
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
