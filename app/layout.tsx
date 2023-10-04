import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onest = Onest({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Timelines",
  description: "Pot your thoughts on timelines and let world know you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
