import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found | ZettaB",
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B0D12] to-gray-900 px-4">
            <div className="max-w-md text-center">
                <div className="text-8xl font-black text-primary/20 mb-4">404</div>
                <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 bg-primary text-white hover:bg-primary-hover transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-6 border border-white/20 text-white hover:bg-white/10 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
