# Next-js-study
https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

## Client side navigation
`Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.`

and 
`browser does not load the full page and client-side navigation is working.`

it doesn't refresh

`If you’ve used <a href="…"> instead of <Link href="…"> and did this, the background color will be cleared on link clicks because the browser does the full refresh.`

## assets
- Important: To use CSS Modules, the CSS file name must end with .module.css.
- css modules automatically generates unique class names

## pre-rendering and data fetching

`by default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.`

- hydration: a process happening when a page is loaded by the browser, and in this process, its javascript code runs and makes the page fully interactive. 
    ```
    Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
    ```

- static generation vs server-side rendering   -> Two forms of Next's pre-rendering. 
  - Static generation: generates the html at build time
  - Server-sdie rendering: generates the html on each request
  - Next js lets us choos which pre-rendering method to apply for each page(Per-page basis)

- how to choose which rendering method to use
  - Next recommend us to use Static generation whenwever possible(to use CDN)
    - ask yourself 'Can I pre-render this page ahead of a user's request?' If yes, use static generation
  - If my page shows frequently update data, use server-side rendering which will be slower, cause it has to build html file on every request. or just don't do it, and use client-side javascript to get frequently updated data. 

- Static generation can be done with and without Data

- swr: https://swr.vercel.app/



## data fetching
https://nextjs.org/docs/basic-features/data-fetching

Three unique Next.js functions you can use to fetch data for pre-rendering

- getStaticProps: static generation - fetch data at build time
- getStaticPaths: static generation - specify dynamic routes to pre-render based on data
- getServerSideProps: server side rendering - fetch data on each request

Use `getStaticProps` to fetch a specific post given an ID and `getStaticPaths` to fetch all possible blog posts.


## More 
https://nextjs.org/learn/basics/deploying-nextjs-app/platform-details