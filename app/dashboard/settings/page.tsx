export default function SettingsPage() {
  const settings = [
    { label: 'Hotline', value: '0909 123 456' },
    { label: 'Email', value: 'hello@lane-nail.com' },
    { label: 'Địa chỉ', value: '123 Nguyễn Huệ, Quận 1, TP.HCM' },
    { label: 'Giờ làm việc', value: '09:00 - 20:00' }
  ];

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Cài đặt</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Thông tin hiển thị</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <form className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Chỉnh sửa thông tin tiệm</h3>
          <div className="mt-6 space-y-4">
            {settings.map((item) => (
              <div key={item.label}>
                <label className="mb-2 block text-sm font-semibold text-slate-700">{item.label}</label>
                <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue={item.value} />
              </div>
            ))}
            <button className="w-full rounded-xl bg-pink-600 px-4 py-3 font-semibold text-white transition hover:bg-pink-500">Lưu cài đặt</button>
          </div>
        </form>

        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Mạng xã hội</h3>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Instagram</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="@lane_nailstudio" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Facebook</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Lane Nail Studio" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">TikTok</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="@lane_nail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
