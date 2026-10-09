export type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  icon: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export type SocialComment = {
  id: number;
  author: string;
  avatar: string;
  platform: string;
  text: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  hours: string;
};
