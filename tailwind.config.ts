const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#fff1f5',
        rosewood: '#f43f5e',
        coffee: '#1f2937'
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(244, 63, 94, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
