/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/details",
        destination: "/details/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
