"use client";

import { useEffect, useRef } from "react";

export default function AdUnit() {
    const adRef = useRef(null);

    useEffect(() => {
        try {
            if (window) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.log("AdSense ignored:", e);
        }
    }, []);

    return (
        <div style={{ minWidth: "300px", width: "100%" }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{
                    display: "block",
                    minWidth: "300px",
                    width: "100%",
                }}
                data-ad-client="ca-pub-6587894583055842"
                data-ad-slot="YOUR_SLOT_ID"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
}