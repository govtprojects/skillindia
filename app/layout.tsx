import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T2T Skill Foundation | Skill Development & Training",
  description: "Vocational skill development, inclusive training and career opportunities by T2T Skill Foundation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
