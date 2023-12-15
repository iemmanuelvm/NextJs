import type { Metadata } from "next";

// mr to generate a metadata snippet
export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ["About Page", "Emmanuel", "Informacion"]
};



export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">
                About page
            </span>
        </>
    )
}