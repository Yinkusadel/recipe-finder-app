import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact me",
    description: "Raech out to me",
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
