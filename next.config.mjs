/** @type {import('next').NextConfig} */
const nextConfig = {
 
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fixtura.s3.ap-southeast-2.amazonaws.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
