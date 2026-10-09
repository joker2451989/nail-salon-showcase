export default function ServicesPage() {
  const services = [
    { id: 1, name: 'Nail Classic', price: '250.000đ', status: 'Đang hiển thị' },
    { id: 2, name: 'Gel Polish', price: '350.000đ', status: 'Đang hiển thị' },
    { id: 3, name: 'Nail Art', price: '450.000đ', status: 'Nháp' }
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Quản lý</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Dịch vụ</h2>
        </div>
        <button className="rounded-xl bg-pink-600 px-4 py-3 font-semibold text-white transition hover:bg-pink-500">+ Thêm dịch vụ</button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.12em] text-slate-500">
                <th className="pb-3">Tên</th>
                <th className="pb-3">Giá</th>
                <th className="pb-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-slate-100">
                  <td className="py-4 font-semibold text-slate-900">{service.name}</td>
                  <td className="py-4">{service.price}</td>
                  <td className="py-4">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{service.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Sửa dịch vụ</h3>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Tên dịch vụ</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Gel Polish" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Mô tả</label>
              <textarea rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Sơn gel bền màu, bóng đẹp và an toàn cho móng." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Giá</label>
              <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="350.000đ" />
            </div>
            <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800">Lưu thay đổi</button>
          </div>
        </form>
      </div>
    </div>
  );
}
