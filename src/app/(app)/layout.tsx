import "@/app/globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
