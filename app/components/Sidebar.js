"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest(`.${styles.sidebar}`)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const routes = [
        { path: "/", label: "Home" },
    ];

    return (
        <div className={styles.sidebarContainer}>
            {/* Hamburger Button */}
            <button
                onClick={toggleSidebar}
                className={styles.toggleButton}
                aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
                aria-expanded={isOpen}
                aria-controls="sidebar-menu"
            >
                <HiOutlineMenuAlt4 size={26} className={styles.icon} />
            </button>

            {/* Sidebar */}
            <nav
                id="sidebar-menu"
                className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
                aria-hidden={!isOpen}
            >
                {/* Close Button */}
                <button
                    onClick={toggleSidebar}
                    className={styles.closeButton}
                    aria-label="Close Sidebar"
                >
                    <RxCross2 size={26} className={styles.icon} />
                </button>

                {/* Navigation Links */}
                <ul className={styles.menu} role="menu" aria-label="Main Navigation">
                    {routes.map((route) => (
                        <li key={route.path}>
                            <Link
                                href={route.path}
                                className={styles.navLink}
                                onClick={toggleSidebar}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;