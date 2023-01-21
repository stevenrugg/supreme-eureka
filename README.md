# Next.js, Tailwind CSS & MDX Blog

---

Feel free to use this site as a template for your own!

Fork this repository and run the following command in the root directory

`npm install --unsafe-perm`

After dependencies are installed start the development server using

`npm start` or `npx next dev`

---

### Blog posts

All posts are stored in the 'Data > Blog' directory. They are written in markdown and have a .MDX file extension. 
Every blog post will have a section of `yaml` at the very top called the `frontmatter` which looks like:

```yaml
---
title: 4 Major Misconceptions about the Word ‘Passion’ & How to Find Yours
date: '2022-01-05'
tags: ['Life', 'Musings']
draft: false
summary: If you can let go of passion and follow your curiosity, your curiosity just might lead you to your passion
images: ['/static/images/6.jpeg']
layout: PostLayout
readTime: '5 minute read'
---
```

This `frontmatter` MUST be at the top of every blog post in order for the post to compile. The first three hyphens must be on line 1.
The blog uses a library called `MDX` which uses another library `graymatter` to parse the markdown 
into a blog post. The compiler uses the `YAML` `frontmatter` as components of the blog post (title, readTime, ect.)
-----
### Development

 ```sh 
npm run dev
``` 
This command wiill start the development server. All changes should
appear in realtime. In order to stop the developmenet server
press Ctrl+C. 

### Production

If you are going to deploy to a serverless env like Vercel or Netlify
then you must make sure everything is production ready by starting the production server using
```shell
npm run start
```
if everything looks good go ahead and run
```shell
npm run build
```
This will make a `dist` folder in your directory that you can then use to host the site on say a traditional c-panel hosting
service.

You can connect the GitHub repository that you forked this blog from 
to connect the cloud deployment service (like Vercel or Netlify).
Make sure that you include the `.env` variables in the deployment or your site won't work. 

Or you can use GitHub pages... up to you.


-----



### Customization

Please delete my blog posts and personal information from `siteMetaData.js` and elsewhere, and include your own. Feel free to 
change the blog layouts as you wish and add/delete features. Have fun and happy contributing.

