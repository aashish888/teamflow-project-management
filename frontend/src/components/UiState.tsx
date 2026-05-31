type UiStateProps = {
  title: string;
  message: string;
};

export function LoadingState({ title, message }: UiStateProps) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-600" />
      <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{message}</p>
    </div>
  );
}

export function ErrorState({ title, message }: UiStateProps) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-lg font-bold text-red-800">{title}</h2>
      <p className="mt-1 text-sm text-red-700">{message}</p>
    </div>
  );
}