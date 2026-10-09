import type { ContactInfo, GalleryItem, Service, SocialComment } from '@/lib/types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Nail Classic',
    description: 'Chăm sóc móng cơ bản, sơn màu đẹp và giữ độ bền lâu.',
    price: '250.000đ',
    icon: '💅'
  },
  {
    id: 2,
    name: 'Gel Polish',
    description: 'Sơn gel bền màu, sáng bóng và bảo vệ móng tốt hơn.',
    price: '350.000đ',
    icon: '✨'
  },
  {
    id: 3,
    name: 'Nail Art',
    description: 'Thiết kế theo phong cách riêng, từ tinh tế đến phá cách.',
    price: '450.000đ',
    icon: '🎨'
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: 'French Nail',
    image: '/images/nail-1.jpg',
    category: 'Classic'
  },
  {
    id: 2,
    title: 'Pink Gel',
    image: '/images/nail-2.jpg',
    category: 'Gel'
  },
  {
    id: 3,
    title: 'Luxury Design',
    image: '/images/nail-3.jpg',
    category: 'Art'
  }
];

export const socialComments: SocialComment[] = [
  {
    id: 1,
    author: 'Lan Anh',
    avatar: '/images/avatar-1.jpg',
    platform: 'Instagram',
    text: 'Móng đẹp, dịch vụ rất tận tâm và nhân viên nhiệt tình. Mình sẽ quay lại nữa.'
  },
  {
    id: 2,
    author: 'Ngọc Trinh',
    avatar: '/images/avatar-2.jpg',
    platform: 'Facebook',
    text: 'Không gian xinh xắn, thiết kế đẹp, làm móng nhanh gọn và rất chuyên nghiệp.'
  }
];

export const contactInfo: ContactInfo = {
  phone: '0909 123 456',
  email: 'hello@lane-nail.com',
  address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
  hours: '09:00 - 20:00'
};
