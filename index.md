---
layout: layouts/base.vto
title: Home
description: Digital Garden - Thoughts on literature, design, development, productivity, and life
templateEngine: vto,md
---

# {{ site.author }}

<p>-</p>

{{ set posts = search.pages("type=article", "date=desc", 5) }}
{{ include "components/post-list.vto" {posts} }}

