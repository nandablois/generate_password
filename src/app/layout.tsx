import "./globals.css";

export const metadata = {
  title: "Gerador de Senhas",
  description: "App seguro para gerar senhas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
