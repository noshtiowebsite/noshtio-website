const siteUrl = 'https://noshtio.com';

const citySlugs = [
  'delhi',
  'mumbai',
  'lucknow',
  'jaipur',
  'kanpur',
  'agra',
  'varanasi',
  'noida',
  'gurgaon',
  'pune',
  'hyderabad',
  'bengaluru',
  'ahmedabad',
  'indore',
  'bhopal',
];

const blogSlugs = [
  'how-to-start-home-kitchen-business-india',
  'zero-commission-food-delivery-india',
  'fssai-license-home-kitchen-guide',
];

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  exclude: ['/vendor/dashboard', '/api/*'],
  additionalPaths: async () => {
    const cityPaths = citySlugs.map((slug) => ({
      loc: `${siteUrl}/areas/${slug}`,
    }));

    const blogPaths = blogSlugs.map((slug) => ({
      loc: `${siteUrl}/blog/${slug}`,
    }));

    return [...cityPaths, ...blogPaths];
  },
};
