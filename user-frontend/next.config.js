/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
// const nextConfig = {};

// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = {
//       fs: false,
//       child_process: false, // Disable fallback for child_process
//     };

//     return config;
//   },
// };
