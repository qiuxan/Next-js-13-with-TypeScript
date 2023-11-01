import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import NavigationBar from "./NavigationBar";
import AuthPrivider from "./auth/Provider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={poppins.variable}>
        <AuthPrivider>
          <NavigationBar />
          <main className="p-5">{children}</main>
        </AuthPrivider>
      </body>
    </html>
  );
}
