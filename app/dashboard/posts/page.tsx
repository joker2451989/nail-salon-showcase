export default function PostsPage() {
  const posts = [
    { id: 1, title: 'Cách chăm sóc móng sau khi làm gel', category: 'Tips' },
    { id: 2, title: 'Xu hướng nail art mùa hè 2026', category: 'Trend' },
    { id: 3, title: 'Làm móng nào phù hợp với phong cách của bạn?', category: 'Styling' }
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Quản lý</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Bài viết</h2>
        </div>
        <button className="rounded-xl bg-pink-600 px-4 py-3 font-semibold text-white transition hover:bg-pink-500">+ Viết bài mới</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="rounded-xl bg-pink-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-pink-700">{post.category}</div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm text-slate-600">Bài viết sẽ được hiển thị trên trang chủ và blog nếu bạn kích hoạt.</p>
            <button className="mt-5 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">Chỉnh sửa</button>
          </div>
        ))}
      </div>

      <form className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h3 className="text-xl font-bold text-slate-900">Viết bài mới</h3>
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Tiêu đề</label>
            <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Xu hướng nail art mùa hè 2026" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Danh mục</label>
            <input className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Trend" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Nội dung</label>
            <textarea rows={6} className="w-full rounded-xl border border-slate-200 px-3 py-3 outline-none focus:border-pink-400" defaultValue="Màu pastel, hình vẽ hoa, và nail mèo đang lên ngôi trong mùa hè này." />
          </div>
          <button className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800">Xuất bản</button>
        </div>
      </form>
    </div>
  );
}
