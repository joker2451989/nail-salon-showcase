import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lane Nail Studio',
  description: 'Website giới thiệu tiệm nail hiện đại với dashboard quản lý nội dung.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
