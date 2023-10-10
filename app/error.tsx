"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("🚀 ~ file: error.tsx:9 ~ ErrorPage ~ error:", error);
  return (
    <>
      <div>An unexpected error has occured.</div>
      <button onClick={reset} className="btn">
        Try again
      </button>
    </>
  );
};

export default ErrorPage;
