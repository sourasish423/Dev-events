"use client";

import Link from "next/link";
import posthog from "@/lib/posthog-browser";

const Navbar = () => {
  const handleNavigationClick = (label: string, destination: string) => {
    posthog.capture("navigation_link_clicked", {
      link_label: label,
      destination,
      nav_area: "header",
    });
  };

  return (
    <header>
      <nav>
        <Link
          href="/"
          className="logo"
          onClick={() => handleNavigationClick("logo", "/")}
        >
          <img src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>

        <ul>
          <Link href="/" onClick={() => handleNavigationClick("home", "/")}>
            Home
          </Link>
          <Link href="/#events" onClick={() => handleNavigationClick("events", "/#events")}>
            Events
          </Link>
          <Link
            href="/#events"
            onClick={() => handleNavigationClick("create_events", "/#events")}
          >
            Create Events
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;