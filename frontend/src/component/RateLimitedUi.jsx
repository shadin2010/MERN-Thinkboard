import React from "react";
import { AlertTriangle, Clock, RefreshCw } from "lucide-react"; // এখানে Clock ও RefreshCw যোগ করা হয়েছে

const RateLimitedUi = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 rounded-2xl shadow-xl p-8 text-center border border-base-300">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-error/10 p-5 rounded-full">
            <AlertTriangle className="size-12 text-error" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-base-content mb-3">
          Too Many Requests!
        </h1>

        {/* Description */}
        <p className="text-base-content/60 leading-relaxed mb-6">
          You've made too many requests in a short period of time. Please wait a
          moment before trying again.
        </p>

        {/* Timer */}
        <div className="bg-base-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-2 text-warning">
            <Clock className="size-5" />
            <span className="font-semibold">Please try again later</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <RefreshCw className="size-5" />
          Try Again
        </button>

        <p className="text-xs text-base-content/40 mt-6">
          Error 429 — Too Many Requests
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUi;
