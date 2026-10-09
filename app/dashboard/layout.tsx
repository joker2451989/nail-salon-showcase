import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="flex min-h-screen">
        <aside className="w-full max-w-[280px] bg-slate-900 p-6 text-white">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">Admin</p>
            <h1 className="mt-2 text-2xl font-black">Lane Nail</h1>
          </div>

          <nav className="space-y-2">
            <Link href="/dashboard" className="block rounded-xl bg-pink-600 px-4 py-3 font-semibold transition hover:bg-pink-500">Tổng quan</Link>
            <Link href="/dashboard/services" className="block rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-slate-800">Dịch vụ</Link>
            <Link href="/dashboard/gallery" className="block rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-slate-800">Gallery</Link>
            <Link href="/dashboard/posts" className="block rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-slate-800">Bài viết</Link>
            <Link href="/dashboard/settings" className="block rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-slate-800">Cài đặt</Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
