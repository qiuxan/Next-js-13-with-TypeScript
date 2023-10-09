import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavigationBar;
