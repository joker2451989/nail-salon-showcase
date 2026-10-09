export default function GalleryPage() {
  const gallery = [
    { id: 1, title: 'Nail French', category: 'Classic', image: '/images/nail-1.jpg' },
    { id: 2, title: 'Pink Gel', category: 'Gel', image: '/images/nail-2.jpg' },
    { id: 3, title: 'Luxury Art', category: 'Art', image: '/images/nail-3.jpg' }
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Quản lý</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Gallery</h2>
        </div>
        <button className="rounded-xl bg-pink-600 px-4 py-3 font-semibold text-white transition hover:bg-pink-500">+ Tải ảnh</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {gallery.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200">
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pink-600">{item.category}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <form className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h3 className="text-xl font-bold text-slate-900">Thêm ảnh mới</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Tên ảnh</label>
            <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" placeholder="Ví dụ: Pink Aura" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Danh mục</label>
            <select className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400">
              <option>Classic</option>
              <option>Gel</option>
              <option>Art</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-700">Chọn hình ảnh</label>
          <input type="file" className="w-full rounded-xl border border-dashed border-slate-300 p-3" />
        </div>
        <button className="mt-6 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800">Lưu hình ảnh</button>
      </form>
    </div>
  );
}
