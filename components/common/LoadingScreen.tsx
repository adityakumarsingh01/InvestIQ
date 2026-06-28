"use client";

interface Props {
  text?: string;
}

export default function LoadingScreen({
  text = "Analyzing Company...",
}: Props) {
  return (
    <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center">

      <div className="relative w-40 h-40">

        {/* Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-[6px] border-slate-700 border-t-blue-500 animate-spin"></div>

        {/* Logo */}
        <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">

          <img
            src="/logo.png"
            alt="InvestIQ"
            className="w-32 h-32 object-contain animate-pulse"
          />

        </div>

      </div>

      <h2 className="mt-8 text-2xl font-bold">
        {text}
      </h2>

      <p className="text-muted mt-2">
        Fetching financial data...
      </p>

    </div>
  );
}