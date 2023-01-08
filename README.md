# Next.js, Tailwind CSS & MDX Blog
__________________________________________
Feel free to use this site as a template for your own! 

Fork this repository and run the following command in the root directory

`npm install --unsafe-perm`

After dependencies are installed start the development server using

`npm start` or `npx next dev`
____________________
### Blog posts
All posts are stored in the 'Data > Blog' directory. They are written in markdown and have a .MD file extension. Every blog post will have a section at the very top called the `front matter` which looks like

```md
---
title: 4 Major Misconceptions about the Word ‘Passion’ & How to Find Yours
date: '2022-01-05'
tags: ['Life', 'Musings']
draft: false
summary: If you ca  n let go of passion and follow your curiosity, your curiosity just might lead you to your passion
images: ['/static/images/6.jpeg']
layout: PostLayout
readTime: '5 minute read'
---
```
This `front matter` MUST be at the top of every blog post in order for the post to compile. The blog uses a library called `graymatter` to parse the markdown into a blog post.


