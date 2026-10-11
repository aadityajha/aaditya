"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link
          className="brand"
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            AJ<span>.</span>
          </span>

          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${open ? "main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            className="nav-contact"
            href={`mailto:${siteConfig.email}`}
            onClick={() => setOpen(false)}
          >
            Say hello <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}