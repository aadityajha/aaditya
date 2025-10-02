"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/"); // Instant redirect to homepage
    }, [router]);

    return null; // No UI displayed
}