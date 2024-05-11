import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
