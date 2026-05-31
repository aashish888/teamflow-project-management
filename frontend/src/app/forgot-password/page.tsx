import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
        <div className="w-full rounded-2xl bg-white p-6 shadow-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            TeamFlow
          </p>
          <h1 className="mt-3 text-3xl font-bold">Forgot password?</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
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
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send reset link
            </button>
          </form>

          <Link
            href="/login"
            className="mt-6 inline-flex text-sm font-medium text-cyan-700 hover:text-cyan-900"
          >
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}