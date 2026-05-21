/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'api.dicebear.com',
    },
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    },
    {
      protocol: 'https',
      hostname: 'www.google.com',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
    },
    {
      protocol: 'https',
      hostname: 'i.pravatar.cc',
    },
  ],
},
};

export default nextConfig;
