import "./globals.css";
import { Urbanist } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page",
  description: "Ultra classy landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
