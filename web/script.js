const STORAGE_KEY = 'lane-nail-content-v1';

const defaultState = {
  heroLead: 'Lane Nail mang đến trải nghiệm chăm sóc móng hiện đại với không gian sang trọng, thiết kế tinh tế và dịch vụ tận tâm cho từng khách hàng.',
  aboutTitle: 'Tiệm nail của bạn, nơi mang lại sự tự tin',
  aboutText: 'Tại Lane Nail, chúng tôi không chỉ làm đẹp móng mà còn xây dựng cảm giác thoải mái và tự tin cho từng khách hàng. Với quy trình chuyên nghiệp, nguyên liệu an toàn và đội ngũ thợ tay nghề cao, mọi chi tiết đều được chăm chút thật tỉ mỉ.',
  heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  services: [
    { id: 1, name: 'Nail Classic', description: 'Chăm sóc móng cơ bản, sơn màu đẹp và giữ độ bền lâu.', price: '250.000đ', icon: '💅', status: 'live' },
    { id: 2, name: 'Gel Polish', description: 'Sơn gel bền màu, sáng bóng và bảo vệ móng tốt hơn.', price: '350.000đ', icon: '✨', status: 'live' },
    { id: 3, name: 'Nail Art', description: 'Thiết kế theo phong cách riêng, từ tinh tế đến phá cách.', price: '450.000đ', icon: '🎨', status: 'draft' }
  ],
  gallery: [
    { id: 1, title: 'French Nail', category: 'Classic', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80' },
    { id: 2, title: 'Pink Gel', category: 'Gel', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80' },
    { id: 3, title: 'Luxury Design', category: 'Art', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80' }
  ],
  reviews: [
    { id: 1, author: 'Lan Anh', platform: 'Instagram', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', text: 'Móng đẹp, dịch vụ rất tận tâm và nhân viên nhiệt tình. Mình sẽ quay lại nữa.' },
    { id: 2, author: 'Ngọc Trinh', platform: 'Facebook', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', text: 'Không gian xinh xắn, thiết kế đẹp, làm móng nhanh gọn và rất chuyên nghiệp.' }
  ],
  contact: {
    phone: '0909 123 456',
    email: 'hello@lane-nail.com',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    hours: '09:00 - 20:00'
  },
  posts: [
    { id: 1, title: 'Cách chăm sóc móng sau khi làm gel', category: 'Tips', content: 'Duy trì độ bền và vẻ đẹp của móng bằng cách tránh va chạm mạnh và dùng kem dưỡng thường xuyên.' },
    { id: 2, title: 'Xu hướng nail art mùa hè 2026', category: 'Trend', content: 'Màu pastel, hoa nhỏ và thiết kế tối giản đang lên ngôi trong mùa hè năm nay.' }
  ]
};

function getState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return structuredClone(defaultState);
  }
  try {
    return { ...defaultState, ...JSON.parse(raw), contact: { ...defaultState.contact, ...(JSON.parse(raw).contact || {}) } };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderServices() {
  const state = getState();
  const list = document.getElementById('servicesList');
  list.innerHTML = state.services.map(service => `
    <article class="card">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.name}</h3>
      <p class="service-desc">${service.description}</p>
      <div class="service-bottom">
        <span>Từ</span>
        <div class="price">${service.price}</div>
      </div>
    </article>
  `).join('');

  const table = document.getElementById('serviceTableBody');
  table.innerHTML = state.services.map(service => `
    <tr>
      <td>${service.name}</td>
      <td>${service.price}</td>
      <td><span class="status ${service.status === 'live' ? 'live' : 'draft'}">${service.status === 'live' ? 'Đang hiển thị' : 'Nháp'}</span></td>
    </tr>
  `).join('');

  const first = state.services[0];
  document.getElementById('serviceNameInput').value = first.name;
  document.getElementById('serviceDescInput').value = first.description;
  document.getElementById('servicePriceInput').value = first.price;
}

function renderGallery() {
  const state = getState();
  const list = document.getElementById('galleryList');
  list.innerHTML = state.gallery.map(item => `
    <article class="gallery-item">
      <img src="${item.image}" alt="${item.title}" />
      <div class="gallery-content">
        <div class="gallery-tag">${item.category}</div>
        <h3 class="gallery-title">${item.title}</h3>
      </div>
    </article>
  `).join('');

  const adminList = document.getElementById('galleryAdminList');
  adminList.innerHTML = state.gallery.map(item => `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px; border:1px solid #edf2f7; border-radius:14px; padding:10px;">
      <img src="${item.image}" alt="${item.title}" style="width:70px; height:70px; object-fit:cover; border-radius:12px;" />
      <div>
        <strong>${item.title}</strong><br>
        <span style="color:#64748b; font-size: 0.9rem;">${item.category}</span>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  const state = getState();
  const list = document.getElementById('reviewsList');
  list.innerHTML = state.reviews.map(review => `
    <article class="review">
      <div class="review-head">
        <img src="${review.avatar}" alt="${review.author}" />
        <div>
          <p class="review-name">${review.author}</p>
          <p class="review-platform">${review.platform}</p>
        </div>
      </div>
      <p class="review-text">"${review.text}"</p>
    </article>
  `).join('');
}

function renderPosts() {
  const state = getState();
  const postsList = document.getElementById('postsList');
  postsList.innerHTML = state.posts.map(post => `
    <div style="border:1px solid #edf2f7; padding:16px; border-radius:14px; margin-bottom:12px;">
      <div style="display:inline-block; background:#fce7f3; color:#be185d; padding:0.4rem 0.7rem; border-radius:999px; font-size:0.7rem; font-weight:800; text-transform: uppercase; letter-spacing: .12em;">${post.category}</div>
      <h4 style="margin:12px 0 8px; font-size:1.2rem;">${post.title}</h4>
      <p style="margin:0; color:#475569; line-height:1.7;">${post.content}</p>
    </div>
  `).join('');
}

function renderContactSettings() {
  const state = getState();
  document.getElementById('phoneText').textContent = state.contact.phone;
  document.getElementById('emailText').textContent = state.contact.email;
  document.getElementById('addressText').textContent = state.contact.address;
  document.getElementById('hoursText').textContent = state.contact.hours;

  document.getElementById('phoneInput').value = state.contact.phone;
  document.getElementById('emailInput').value = state.contact.email;
  document.getElementById('addressInput').value = state.contact.address;
  document.getElementById('hoursInput').value = state.contact.hours;
  document.getElementById('heroInput').value = document.getElementById('heroImage').src;
}

function renderText() {
  const state = getState();
  document.getElementById('heroLead').textContent = state.heroLead;
  document.getElementById('aboutTitle').textContent = state.aboutTitle;
  document.getElementById('aboutText').textContent = state.aboutText;
  document.getElementById('heroImage').src = state.heroImage;
}

function renderDashboardStats() {
  const state = getState();
  document.getElementById('statServices').textContent = state.services.length;
  document.getElementById('statPosts').textContent = state.posts.length;
  document.getElementById('statGallery').textContent = state.gallery.length;
}

function updatePageFromState() {
  renderText();
  renderServices();
  renderGallery();
  renderReviews();
  renderPosts();
  renderContactSettings();
  renderDashboardStats();
}

// Event Listeners
document.getElementById('showDashboardBtn').addEventListener('click', () => {
  document.getElementById('dashboardSection').classList.add('active');
  document.getElementById('siteSection').classList.remove('active');
  document.getElementById('dashboardBtn').classList.add('active');
  document.getElementById('siteBtn').classList.remove('active');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('dashboardBtn').addEventListener('click', () => {
  document.getElementById('dashboardSection').classList.add('active');
  document.getElementById('siteSection').classList.remove('active');
  document.getElementById('dashboardBtn').classList.add('active');
  document.getElementById('siteBtn').classList.remove('active');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('siteBtn').addEventListener('click', () => {
  document.getElementById('siteSection').classList.add('active');
  document.getElementById('dashboardSection').classList.remove('active');
  document.getElementById('siteBtn').classList.add('active');
  document.getElementById('dashboardBtn').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('serviceForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const state = getState();
  state.services[0] = {
    ...state.services[0],
    name: document.getElementById('serviceNameInput').value,
    description: document.getElementById('serviceDescInput').value,
    price: document.getElementById('servicePriceInput').value
  };
  saveState(state);
  updatePageFromState();
});

document.getElementById('settingsForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const state = getState();
  state.contact.phone = document.getElementById('phoneInput').value;
  state.contact.email = document.getElementById('emailInput').value;
  state.contact.address = document.getElementById('addressInput').value;
  state.contact.hours = document.getElementById('hoursInput').value;
  state.heroImage = document.getElementById('heroInput').value || state.heroImage;
  saveState(state);
  updatePageFromState();
});

document.getElementById('postForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const state = getState();
  state.posts.unshift({
    id: Date.now(),
    title: document.getElementById('postTitleInput').value || 'Bài viết mới',
    category: document.getElementById('postCategoryInput').value || 'News',
    content: document.getElementById('postContentInput').value || 'Nội dung bài viết của bạn.'
  });
  saveState(state);
  updatePageFromState();
  document.getElementById('postForm').reset();
});

// Initialize
updatePageFromState();
