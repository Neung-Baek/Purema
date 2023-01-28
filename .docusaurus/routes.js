import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'dc1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7d1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ab7'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '298'),
    exact: true
  },
  {
    path: '/blog/2023/01/28/Intro/Intro',
    component: ComponentCreator('/blog/2023/01/28/Intro/Intro', 'a04'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'dd6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '186'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '484'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c64'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '716'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '886'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '280'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '64e'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '763'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '48d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9d7'),
    routes: [
      {
        path: '/docs/category/web',
        component: ComponentCreator('/docs/category/web', 'ddd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Math/Intro',
        component: ComponentCreator('/docs/Math/Intro', '368'),
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
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a73'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
