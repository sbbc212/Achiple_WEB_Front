// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "assets-global.website-files.com",
          },
          {
            protocol: "https",
            hostname: "dld3l66jf7t9m.cloudfront.net",
          },
          {
            protocol: "https",
            hostname: "user-images.githubusercontent.com",
          },
        ],
      },
      swcMinify: false,
      experimental: {
        swcTraceProfiling: true,
      },
    };
  }

  return {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "user-images.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "dld3l66jf7t9m.cloudfront.net",
        },
      ],
    },
    swcMinify: false,
    compiler: {
      removeConsole: {
        exclude: ["error"],
        experimentalDecorators: true,
      },
    },
  };
};
