import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import ScrollTop from "@/components/ScrollTop";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vaastu Group Of Engineers – Industrial Project Consultant",
  description:
    "Strategic Project Consultancy That Bridges The Gap Between Vision and Reality",
  icons: {
    icon: "https://ext.same-assets.com/3352166871/537002545.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <Header />
        <ClientBody>{children}</ClientBody>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
