
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Hunt & Hook",
  description: "Find hunting & fishing trips. Subscribe as an Outfitter or Guide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
