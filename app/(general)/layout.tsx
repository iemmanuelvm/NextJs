
// To create the layout rapidly we use a snippet with lrc

import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <Navbar></Navbar>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">
                    Hola mundo
                </span>

                {children}
            </main>
        </>
    );
}