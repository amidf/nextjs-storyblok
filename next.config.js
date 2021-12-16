module.exports = {
  images: {
    domains: ["a.storyblok.com", "images.contentful.com"],
  },
  i18n: {
    localeDetection: true,
    locales: ["en-us", "ru-ru"],
    defaultLocale: "en-us",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
