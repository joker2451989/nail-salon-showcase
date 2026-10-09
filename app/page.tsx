import { gallery, services, socialComments, contactInfo } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="bg-[#fff8fb] text-gray-800">
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur-md">
        <div className="container-shell flex items-center justify-between py-4">
          <div className="text-2xl font-black tracking-tight text-pink-600">Lane Nail</div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#about" className="transition hover:text-pink-600">Giới thiệu</a>
            <a href="#services" className="transition hover:text-pink-600">Dịch vụ</a>
            <a href="#gallery" className="transition hover:text-pink-600">Thư viện</a>
            <a href="#reviews" className="transition hover:text-pink-600">Review</a>
            <a href="#contact" className="transition hover:text-pink-600">Liên hệ</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-pink-500"
          >
            Đặt lịch
          </a>
        </div>
      </header>

      <section className="container-shell grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-pink-700">
            BEAUTY • CARE • STYLE
          </p>
          <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            Làm đẹp móng <span className="text-pink-600">tự tin</span> mỗi ngày
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Lane Nail mang đến trải nghiệm chăm sóc móng hiện đại với không gian sang trọng, thiết kế tinh tế và dịch vụ tận tâm cho từng khách hàng.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-pink-500"
            >
              Đặt lịch ngay
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-pink-300 bg-white px-6 py-3 text-base font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Xem gallery
            </a>
          </div>

          <div className="mt-10 flex items-center gap-10 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-black text-gray-900">2.5k+</p>
              <p>Khách hàng hài lòng</p>
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900">7+</p>
              <p>Năm kinh nghiệm</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-white to-rose-50 p-4 shadow-soft">
          <img
            src="/images/hero-nail.jpg"
            alt="Nail studio"
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section id="about" className="container-shell py-16">
        <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-soft md:grid-cols-[1fr_1.3fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Về chúng tôi</p>
            <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">Tiệm nail của bạn, nơi mang lại sự tự tin</h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            Tại Lane Nail, chúng tôi không chỉ làm đẹp móng mà còn xây dựng cảm giác thoải mái và tự tin cho từng khách hàng. Với quy trình chuyên nghiệp, nguyên liệu an toàn và đội ngũ thợ tay nghề cao, mọi chi tiết đều được chăm chút thật tỉ mỉ.
          </p>
        </div>
      </section>

      <section id="services" className="container-shell py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Dịch vụ</p>
          <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Lựa chọn phù hợp với phong cách của bạn</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <div className="mb-5 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-pink-100 pt-4">
                <span className="text-sm text-gray-500">Từ</span>
                <span className="text-xl font-black text-pink-600">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="container-shell py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Gallery</p>
          <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Một số mẫu nail đẹp đã thực hiện</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">{item.category}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="container-shell py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Khách hàng</p>
          <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Review từ cộng đồng mạng xã hội</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {socialComments.map((comment) => (
            <div key={comment.id} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <img src={comment.avatar} alt={comment.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900">{comment.author}</p>
                  <p className="text-sm text-gray-500">{comment.platform}</p>
                </div>
              </div>

              <p className="mt-5 text-lg leading-8 text-gray-600">“{comment.text}”</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container-shell py-16">
        <div className="grid gap-8 rounded-[2rem] bg-[#fff1f5] p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Liên hệ</p>
            <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Đặt lịch ngay hôm nay</h2>

            <div className="mt-8 space-y-4 text-lg text-gray-700">
              <p>📞 {contactInfo.phone}</p>
              <p>📩 {contactInfo.email}</p>
              <p>📍 {contactInfo.address}</p>
              <p>🕒 {contactInfo.hours}</p>
            </div>
          </div>

          <form className="rounded-[1.5rem] bg-white p-6 shadow-soft">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Họ và tên</label>
              <input className="w-full rounded-xl border border-pink-100 bg-white px-4 py-3 outline-none ring-0 transition focus:border-pink-400" placeholder="Nhập tên của bạn" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Số điện thoại</label>
              <input className="w-full rounded-xl border border-pink-100 bg-white px-4 py-3 outline-none ring-0 transition focus:border-pink-400" placeholder="Nhập số điện thoại" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Yêu cầu</label>
              <textarea rows={4} className="w-full rounded-xl border border-pink-100 bg-white px-4 py-3 outline-none ring-0 transition focus:border-pink-400" placeholder="Mình muốn đặt lịch làm móng..." />
            </div>

            <button className="w-full rounded-xl bg-pink-600 px-4 py-3 font-semibold text-white transition hover:bg-pink-500">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-white">
        <div className="container-shell flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <div className="text-xl font-black text-pink-400">Lane Nail</div>
          <p className="text-sm text-slate-300">© 2026 Lane Nail Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
