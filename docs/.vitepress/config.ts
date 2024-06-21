import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'RedstoneChicken.com',
  description: 'The official website for Redstone Chicken.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Wiki example', link: '/example' },

       {
         text: 'Dropdown Menu',
         items: [
           { text: 'Item A', link: '/item-1' },
           { text: 'Item B', link: '/item-2' },
           { text: 'Item C', link: '/item-3' },
         ],
       },
       
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
