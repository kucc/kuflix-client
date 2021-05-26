module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: process.env.API_ORIGINAL_URL + '/:slug*',
      },
    ];
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_ORIGINAL_URL: process.env.API_ORIGINAL_URL,
    INDEX_API: process.env.INDEX_API,
    SUBJECT_API: process.env.SUBJECT_API,
    REVIEW_API: process.env.REVIEW_API,
    QUOTE_API: process.env.QUOTE_API,
  },
};
