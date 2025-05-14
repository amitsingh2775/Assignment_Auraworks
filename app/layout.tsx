import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIOrtho Dashboard",
  description: "AIOrtho Competency Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString() ?? "Default Title"}</title>
        <meta name="description" content={metadata.description?.toString() ?? "Default Description"} />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <div className="flex flex-1 h-[calc(100vh-64px)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}