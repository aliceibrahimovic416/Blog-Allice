import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/tutorial/how-to-setup-blog.tsx",
    featureArticle: true,
    preview: {
      author: MAYUR,
      date: "August 08 2022",
      articleTitle: "Apple Computer",
      tags: "",
      thumbnail: "/public/images/background.jpg",
      shortIntro: "this brand is the most famous brand",
      category: "tutorial",
    },
    seo: {
      title: "",
      description: "",
      keywords: "demo, blog setup",
      ogImage: "/public/images/background.jpg",
      twitterHandle: "@mayur_nalwala",
      author: MAYUR.name,
    },
  },
  {
    path: "/pages/tutorial/how-to-write-your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "TouchCom Fashion",
      tags: "",
      thumbnail: "/public/images/touchcom.jpg",
      shortIntro:
        "This a step by step guide on TouchCom .",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
  {
    path: "/pages/tutorial/how-to-deploy-blog.tsx",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "i Phone ",
      tags: "demo, deploy blog",
      thumbnail: "/public/images/Iphone.jpg",
      shortIntro:
        "In this article you will see several type of i Phone.",
      category: "tutorial",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/how-to-deploy.svg",
    },
  },
  {
    path: "/pages/tutorial/home-layout.tsx",
    preview: {
      author: RUPALI,
      date: "August 14 2022",
      articleTitle: "Famous brand",
      tags: "",
      thumbnail: "/public/images/FamousBrand.jpg",
      shortIntro: "In this article we will see ",
      category: "layouts",
    },
    seo: {
      title: "Famous Brand",
      description: "In this article we will see ",
      keywords:
        "next js, tailwind css, typescript, blog template, default layout, default home layout",
      ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
      author: RUPALI.name,
    },
  },
  {
    path: "/pages/tutorial/blog-with-sidebar-layout.tsx",
    preview: {
      author: MAYUR,
      date: "August 14 2022",
      articleTitle: "Mobile",
      tags: "",
      thumbnail: "/public/images/Mobile.jpg",
      shortIntro:
        "In this article we will see Page Layout ",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
    },
  },
   {
    path: "/pages/tutorial/blog-with-centered-layout.tsx",
    preview: {
      author: RUPALI,
      date: "August 14 2022",
      articleTitle: "Apple Brand",
      tags: "demo, centered, centered layout",
      thumbnail: "/public/images/AppleBrand.jpg",
      shortIntro:
        "This a demo article with ",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
    },
  },
  // {
  //   path: "/pages/tutorial/all-components.tsx",
  //   preview: {
  //     author: RUPALI,
  //     date: "August 08 2022",
  //     articleTitle: "All Components",
  //     tags: "demo, all components",
  //     thumbnail: "/public/imp_assets/tutorials/all-components.svg",
  //     shortIntro: "List of all usable components, its types and how to use it.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords: "demo, all components, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/all-components.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/style-guide.tsx",
  //   preview: {
  //     author: MAYUR,
  //     date: "August 10 2022",
  //     articleTitle: "Style Guide",
  //     tags: "demo, all components, style guide, styling tutorial",
  //     thumbnail: "/public/imp_assets/tutorials/style-guide.svg",
  //     shortIntro: "Styling and theming tutorial.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/style-guide.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/icons.tsx",
  //   preview: {
  //     author: MAYUR,
  //     date: "August 13 2022",
  //     articleTitle: "How to use icons",
  //     tags: "demo, all components, style guide, styling tutorial, icons, how to use icons in website",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-use-icons.svg",
  //     shortIntro: "How to use icons in your blog website.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
  //     ogImage: "/public/imp_assets/tutorials/how-to-use-icons.svg",
  //   },
  // },
  // {
  //   path: "/pages/blog/your-first-article.tsx",
  //   preview: {
  //     author: MAYUR,
  //     date: "August 6 2022",
  //     articleTitle: "Your first article",
  //     shortIntro:
  //       "This is a demo file for your first article, you can copy structure of this file to create multile article.",
  //     tags: "demo, your first article",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
  //     ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //   },
  // },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
