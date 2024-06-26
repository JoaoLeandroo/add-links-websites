import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });
import AuthProvider from "./context/auth";

export const metadata: Metadata = {
  title: "Add Links Websites",
  description: "Adicionando links de WebSites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-zinc-500`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
