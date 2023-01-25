import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'cfc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '89e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '891'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '532'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1bd'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '472'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'dd7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '3b6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '747'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '501'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4a7'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '4c3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '76a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '584'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '244'),
    routes: [
      {
        path: '/docs/category/web',
        component: ComponentCreator('/docs/category/web', 'ddd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/TIL/',
        component: ComponentCreator('/docs/TIL/', 'da6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Web/manage-docs-versions',
        component: ComponentCreator('/docs/Web/manage-docs-versions', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Web/translate-your-site',
        component: ComponentCreator('/docs/Web/translate-your-site', 'fdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Wiki/',
        component: ComponentCreator('/docs/Wiki/', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Wiki/aa',
        component: ComponentCreator('/docs/Wiki/aa', 'be3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
