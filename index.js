module.exports = (themeConfig, ctx) => {
  return {
    plugins:[
      ["@vuepress/plugin-active-header-links"],
      ["@vuepress/plugin-back-to-top"],
      ["@vuepress/plugin-medium-zoom"],
      ["@vuepress/plugin-nprogress"],
      ["@vuepress/plugin-search"],
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            // layout: 'IndexPost', defaults to `Layout.vue`
            itemLayout: 'Post',
            itemPermalink: '/:year-:month-:day-:slug',
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
        frontmatters: [
          {

            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Tag' },
            itemLayout: 'Tag',
            pagination: {
              lengthPerPage: 5
            }
          },
        ]
      }],
    ]
  }
}
