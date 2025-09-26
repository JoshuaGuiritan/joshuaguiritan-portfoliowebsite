import type { Metadata } from "next";
import "../styles/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Joshua Guiritan - Portfolio Website",
  description: "Joshua Guiritan - Portfolio Website",
  icons: {
    icon: "/Images/code-slash.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {children}
    </html>
  );
}
