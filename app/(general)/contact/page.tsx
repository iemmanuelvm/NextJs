import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page Description',
    keywords: ["1", "2", "3"],
    authors: [{ name: "Emmanuel de J. Velasquez Martinez", url: "https://nextjs.org" }],
    category: "Contact me",

};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">
                Contact page
            </span>
        </>
    )
}