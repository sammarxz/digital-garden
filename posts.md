---
layout: layouts/base.vto
title: posts
description: Todos os artigos sobre literatura, design, desenvolvimento, reflexões e vida
url: /posts/
templateEngine: vto,md
---

<h1>{{ title }}</h1>

<p>-</p>

{{ set posts = search.pages("type=article", "date=desc") }}
{{ include "components/post-list.vto" {posts} }}
