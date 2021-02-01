module.exports = {
  siteMetadata: {
    title: 'Gurusabarish Blog',
    name: 'Gurusabarish',
    siteUrl: 'https://gurusabarish.tech',
    description: 'Hi, I am Gurusabarish, a passionate web developer and ML engineer from India. I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly.',
    hero: {
      heading: 'Hey! Thanks for reading', 
      maxWidth: 652,
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/gurusabarishh',
      },
      {
        name: 'github',
        url: 'https://github.com/gurusabarish',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/gurusabarishh',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/gurusabarish',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167646412-7",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://gurusabarish.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-6490195539814672`
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
