// add global.css to top level component (this root layout)
import '@/app/ui/global.css';
// add inter font from fonts.js to the <body> in /app/layout.tsx
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
