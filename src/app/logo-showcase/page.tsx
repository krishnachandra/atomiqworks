'use client';

import { AtomiqLogo } from "@/components/ui/AtomiqLogo";
import { NeonAtomiqLogo } from "@/components/ui/NeonAtomiqLogo";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export default function LogoShowcasePage() {
    const originalLogoRef = useRef<HTMLDivElement>(null);
    const neonLogoRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadLogo = async (ref: React.RefObject<HTMLDivElement | null>, filename: string) => {
        if (!ref.current || isDownloading) return;

        setIsDownloading(true);
        try {
            const scale = 4;
            const node = ref.current;
            const width = node.offsetWidth * scale;
            const height = node.offsetHeight * scale;

            const image = await htmlToImage.toPng(node, {
                width,
                height,
                style: {
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: `${node.offsetWidth}px`,
                    height: `${node.offsetHeight}px`,
                },
                pixelRatio: 1, // Let scale handle the resolution multiplier
            });

            const link = document.createElement("a");
            link.href = image;
            link.download = filename;
            link.click();
        } catch (error) {
            console.error("Failed to generate image:", error);
            alert("Failed to download image. Please check the console for details.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-neutral-950 relative gap-16 py-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Logo Variations</h1>
                <p className="text-neutral-400">Comparing original animated vs static neon styles</p>
            </div>

            <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center justify-center w-full max-w-7xl">
                {/* Original Logo Section */}
                <div className="flex flex-col items-center gap-8">
                    <div className="p-12 bg-white rounded-3xl" style={{ backgroundColor: 'white' }}>
                        <div ref={originalLogoRef} className="inline-flex">
                            <AtomiqLogo size={250} className="scale-[1]" />
                        </div>
                    </div>

                    <button
                        onClick={() => downloadLogo(originalLogoRef, "AtomiqLogo-Animated-HighRes.png")}
                        disabled={isDownloading}
                        className="px-6 py-3 bg-white text-neutral-950 font-medium rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-neutral-200 transition-colors z-50 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        {isDownloading ? (
                            <div className="w-5 h-5 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        )}
                        Download Original
                    </button>
                </div>

                {/* Neon Logo Section */}
                <div className="flex flex-col items-center gap-8">
                    <div className="p-12 bg-neutral-950 rounded-3xl border border-neutral-800" style={{ backgroundColor: '#0a0a0a' }}>
                        <div ref={neonLogoRef} className="inline-flex">
                            <NeonAtomiqLogo size={250} className="scale-[1]" />
                        </div>
                    </div>

                    <button
                        onClick={() => downloadLogo(neonLogoRef, "AtomiqLogo-Neon-HighRes.png")}
                        disabled={isDownloading}
                        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors z-50 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        {isDownloading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        )}
                        Download Neon
                    </button>
                </div>
            </div>
        </div>
    );
}
