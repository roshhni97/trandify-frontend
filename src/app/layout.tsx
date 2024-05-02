import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/utils/config";
import AuthProvider from "@/components/common/AuthProvider";

const fonts = Share_Tech_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trendify",
  description: "Automate Your Dashboard Monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <body className={fonts.className}>
            {children}
            <Toaster />
          </body>
        </AuthProvider>
      </GoogleOAuthProvider>
    </html>
  );
}
