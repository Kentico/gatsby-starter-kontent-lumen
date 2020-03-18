[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/GatsbyCentral/gatsby-v2-starter-lumen/master/LICENSE)

# Gatsby Starter Kontent Lumen

Lumen is a minimal, lightweight and mobile-first starter for creating blogs using
[Gatsby](https://github.com/gatsbyjs/gatsby).

This is an edited clone of
[gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) and [gatsby-v2-starter-lumen](https://github.com/GatsbyCentral/gatsby-v2-starter-lumen)
migrated for getting content from headless CMS
[Kontent](https://kontent.ai/).

## Features
+ Content from [Kontent](http://kontent.ai/) headless CMS.
+ Lost Grid ([peterramsing/lost](https://github.com/peterramsing/lost)).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming.
+ Syntax highlighting in code blocks.
+ Sidebar menu built using a configuration block.
+ Archive organized by tags and categories.
+ Automatic Sitemap generation.
+ Google Analytics support.

## Folder Structure

```
└── src
    ├── assets
    │   ├── fonts
    │   │   └── fontello-771c82e0
    │   │       ├── css
    │   │       └── font
    │   └── scss
    │       ├── base
    │       ├── mixins
    │       └── pages
    ├── components
    │   ├── Article
    │   ├── ArticleTemplateDetails
    │   ├── CategoryTemplateDetails
    │   ├── Links
    │   ├── Layout
    │   ├── Menu
    │   ├── PageTemplateDetails
    │   ├── Sidebar
    │   └── TagTemplateDetails
    ├── pages
    └── templates
```

## Getting Started
Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatsby-starter-kontent-lumen https://github.com/kentico/gatsby-starter-kontent-lumen`

TODO: Intructions for own Kontent project 

#### Running in Development
`gatsby develop`

#### Building
`gatsby build`

#### Deploy with Netlify

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kentico/gatsby-starter-kontent-lumen" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Screenshot

TODO: Screenshot
![](http://i.imgur.com/422y5GV.png)
