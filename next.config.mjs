/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/works",
        destination: "/works/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
