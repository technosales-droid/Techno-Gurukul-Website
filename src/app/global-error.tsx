"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-boundary-wrapper">
      <div className="d-flex align-items-center justify-content-center min-vh-100 p-4">
        <div className="error-card p-5 text-center">
          {/* Error Icon */}
          <div className="error-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>

          {/* Status Badge */}
          <div className="status-badge">APPLICATION ERROR</div>

          {/* Error Title */}
          <h2 className="mb-3 fw-bold text-dark">Oops! Something went wrong</h2>

          {/* Error Description */}
          <p className="text-muted mb-4 lead">
            We encountered an unexpected error while loading this page. Don't
            worry, our team has been notified and we're working on a fix.
          </p>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-enhanced btn-primary-enhanced"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
              Refresh Page
            </button>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="btn btn-enhanced btn-secondary-enhanced"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
              Try Again
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-4 pt-3 border-top">
            <small className="text-muted">
              If this problem persists, please contact our support team with the
              error details above.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
