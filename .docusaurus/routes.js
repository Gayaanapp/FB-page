import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd2c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a4d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'faa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '550'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd1b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f4f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '67c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '095'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '6de'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8f5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '989'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '707'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'fe7'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a73'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4da'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6d5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b7c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '410'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4dc'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd31'),
            routes: [
              {
                path: '/docs/category/major-integrations-missing',
                component: ComponentCreator('/docs/category/major-integrations-missing', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/major-integrations-missing-1',
                component: ComponentCreator('/docs/category/major-integrations-missing-1', '9fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/missing-integeration',
                component: ComponentCreator('/docs/category/missing-integeration', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/signup-with-email-issues',
                component: ComponentCreator('/docs/category/signup-with-email-issues', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/2 Direct connection',
                component: ComponentCreator('/docs/Major Integrations missing/2 Direct connection', '66d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/chats',
                component: ComponentCreator('/docs/Major Integrations missing/chats', '8e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/Matching filter',
                component: ComponentCreator('/docs/Major Integrations missing/Matching filter', '600'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/Payment with cards',
                component: ComponentCreator('/docs/Major Integrations missing/Payment with cards', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/Push notification',
                component: ComponentCreator('/docs/Major Integrations missing/Push notification', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Major Integrations missing/Somali Language',
                component: ComponentCreator('/docs/Major Integrations missing/Somali Language', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other Issues.md/Matching screen navigation iisue',
                component: ComponentCreator('/docs/Other Issues.md/Matching screen navigation iisue', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other Issues.md/profile view second photo',
                component: ComponentCreator('/docs/Other Issues.md/profile view second photo', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other Issues.md/updato iisue',
                component: ComponentCreator('/docs/Other Issues.md/updato iisue', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup Profile issue/DOB validation',
                component: ComponentCreator('/docs/Signup Profile issue/DOB validation', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup Profile issue/Force device location',
                component: ComponentCreator('/docs/Signup Profile issue/Force device location', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup Profile issue/Name input validation',
                component: ComponentCreator('/docs/Signup Profile issue/Name input validation', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup Profile issue/SigupUpload photo',
                component: ComponentCreator('/docs/Signup Profile issue/SigupUpload photo', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup with Email Issue/input validation',
                component: ComponentCreator('/docs/Signup with Email Issue/input validation', 'd4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup with Email Issue/reset password',
                component: ComponentCreator('/docs/Signup with Email Issue/reset password', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Signup with Email Issue/Signing with existing email',
                component: ComponentCreator('/docs/Signup with Email Issue/Signing with existing email', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '079'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
