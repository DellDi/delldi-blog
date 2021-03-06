/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'delldi',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/faviconCommunity.ico',
  organizationName: 'delldi', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'zd迪',
      logo: {
        alt: '',
        src: 'https://avatars3.githubusercontent.com/u/40460351?s=60&u=ba9637be7363625f2322319ab99fe8508e4bce87&v=4',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: '组件与随笔',
          position: 'right',
        },
        {to: 'blog', label: '博客', position: 'right'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/delldi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '语法使用',
              to: 'docs/doc1',
            },
            {
              label: '组件渲染示例',
              to: 'docs/mdx',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'linkedin',
              href: 'https://www.linkedin.com/company/linkedin-china/',
            },
            {
              label: 'codePen',
              href: 'https://codepen.io/dell_di/pen',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/delldi',
            }
          ],
        },
      ],
      logo: {
        alt: 'docusaurus link',
        src: 'img/oss_logo.png',
        href: 'https://docusaurus.io/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} delldi, thanks the Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          path: './blog',
          routeBasePath: '/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
