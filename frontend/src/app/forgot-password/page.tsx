import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
        <div className="w-full rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            TeamFlow
          </p>
          <h1 className="mt-3 text-3xl font-bold">Forgot password?</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Enter your registered email address and we will send password reset
            instructions.
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

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
            >
              Send reset link
            </button>
          </form>

          <Link
            href="/login"
            className="mt-6 inline-flex text-sm font-medium text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}
