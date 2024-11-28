import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Find  recipe",
    description: "Find all kinds of recipe",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
