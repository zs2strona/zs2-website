/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/plan_lekcji',
        destination: 'https://plan-lekcji.zs2lancut.pl',
        permanent: true,
      },
      {
        source: '/dziennik',
        destination: 'https://uonetplus.vulcan.net.pl/powiatlancucki/',
        permanent: true,
      },
      {
        source: '/nabor',
        destination: 'https://nabor.pcss.pl/lancut',
        permanent: true,
      },
      {
        source: '/prywatnosc',
        destination: 'https://media.graphassets.com/zG7PkIAqTveHpA7HKki6',
        permanent: true,
      },
      {
        source: '/rabaty',
        destination: 'http://zs2rabaty.prv.pl',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
