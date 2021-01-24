---
title: "Add Hugo pagination for blog or posts in hugo"
date: 2021-01-19
author: Gurusabarish
hero: ./images/hugo.jpg
excerpt: "Hugo provides a internal pagination. Here, we are look into how to use that internal pagination to your hugo website.We also provide a example with coding part"
---

In this article, we are discuss about **'''How to set hugo pagination in your website which is generated by Hugo?'''**.

# Introduction to Hugo
Hugo is a static site generator which helps to build a website easily and looks like a professional developer. Hugo is made with GOLANG and maintaining by [hugo developers](https://github.com/orgs/gohugoio/people). Hugo is the fastest genarators camparitively other static site generators.

### Why hugo is so popular?
- You get a strong security for website
- To get a high Performance website
- Ease of use even your are not a developer
- Too many website themes provided by Hugo to make a website instanly.

# what is pagination?

Assume that "you have a 50 blog posts and display this all posts in a single page". **What will be happen?** 
- Your website gets slow down 
- User may not view the all posts 
- Website not looks like a professionial. 

So, we are decide to give a pagination for each 5(your wish) posts. Pagination will display the given number of blog posts. So, we can easily overcome the above problems using pagination. 

# Hugo's Internal Pagination

**Hugo provides a internal pagination. Here, we are look into "how to use that internal pagination to your hugo website"**.

Lets move into coding part. Ausume that your list page code looks like or something like this.
``` html

{{ range .Pages }}
<a class="text-decoration-none" href="{{ .Permalink }}">
  <div class="card-body">
    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
      {{ .Title }}
      </div>
  </div>
</a>
{{ end }}

```

If you want to add pagination, you should change the code as below and **add Paginate count(Paginate: 5) in your config file.** Paginate count decide "How many blog posts should be present in a page".
``` html

{{ range .Paginator.Pages }}
<a class="text-decoration-none" href="{{ .Permalink }}">
  <div class="card-body">
    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
      {{ .Title }}
      </div>
  </div>
</a>
{{ end }}

{{ template "_internal/pagination.html" . }}

```

------------------------------------------------