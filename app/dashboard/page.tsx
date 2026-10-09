export default function DashboardPage() {
  const stats = [
    { label: 'Dịch vụ', value: '18', accent: 'bg-pink-100 text-pink-700' },
    { label: 'Bài viết', value: '12', accent: 'bg-emerald-100 text-emerald-700' },
    { label: 'Ảnh gallery', value: '64', accent: 'bg-violet-100 text-violet-700' }
  ];

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Dashboard</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Tổng quan</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.accent}`}>{item.label}</div>
            <p className="mt-6 text-4xl font-black text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Thông tin tiệm</h3>
          <div className="mt-6 space-y-3 text-slate-700">
            <p>📞 0909 123 456</p>
            <p>📩 hello@lane-nail.com</p>
            <p>📍 123 Nguyễn Huệ, Quận 1, TP.HCM</p>
            <p>🕒 09:00 - 20:00</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Nội dung nổi bật</h3>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Mẫu nail đẹp nhất trong tháng</li>
            <li>• Chương trình ưu đãi khách hàng mới</li>
            <li>• Ảnh review từ Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
