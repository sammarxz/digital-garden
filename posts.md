---
layout: layouts/base.vto
title: posts
description: All articles about literature, design, development, reflections, and life
url: /posts/
templateEngine: vto,md
---

<h1>{{ title }}</h1>

<p>-</p>

{{ set posts = search.pages("type=article", "date=desc") }}
{{ include "components/post-list.vto" {posts} }}
