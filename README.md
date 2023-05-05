# 11ty-webc-tailwindcss-starter

![demo](https://user-images.githubusercontent.com/45963660/236358216-bc799425-6eb1-443f-a2dc-72c7ed386d6b.png)

A simpler starter for building [Eleventy](https://www.11ty.dev/) static sites with [WebC](https://www.11ty.dev/docs/languages/webc/) and [Tailwind CSS](https://tailwindcss.com/)

## Install

1. Clone this repo: `git clone --depth 1 git@github.com:dulltackle/11ty-webc-tailwindcss-starter.git my-awesome-site`

2. Change into the working directory: `cd my-awesome-site`

3. Install dependencies: `npm install`

4. Check if works properly:

   1. start the preview server: `npm run dev`
   2. preview in the browser: `http://localhost:8080`
   3. change page content and add Tailwind CSS utilities

   If works properly, you'll see something like below in the terminal:
   
   ![rebuild](https://user-images.githubusercontent.com/45963660/236365096-24ab6a09-6974-4234-8fb8-b2c74aebb2ce.png)

5. Clean template:

   1. delete template files like `src/_includes/webc/my-counter.webc`
   2. update info files like `package.json`
   3. ...
   4. clear template git repo history: `rm -rf .git`

6. Initialize and publish your own git repo

7. If ready, create a production build: `npm run build`

## Pitfalls

For the sake of simplicity, there is no build tool like **Webpack**. So Tailwind CSS actually runs **in parallel with** Eleventy, which may causes some problems during development:

1. developer adds tailwind utilities to the page(`src/index.webc` for example)
2. the rebuilding processes of Eleventy and Tailwind CSS are both triggered
3. the page in the preview changes accordingly

Actually, the rebuilding process of Eleventy is triggered twice:

1. developer changes `src/index.webc`
2. Tailwind CSS changes `src/style.css`

Most of the time, the page in the preview shows the version with the latest CSS file generated by Tailwind CSS. If it fails, **JUST PRESS F5**(It works for me😉)

## Todo

- [ ] create preview site
- [ ] add navigation template
- [ ] add posts template
- [ ] add data file template
- [ ] support static file
- [ ] support date

## Thanks

- [minimal-11ty-tailwind-starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter)
- [eleventy-tailwind-template](https://github.com/jeremydaly/eleventy-tailwind-template)

## License

[MIT](./LICENSE) License © 2023-Present [dulltackle](https://github.com/dulltackle)
