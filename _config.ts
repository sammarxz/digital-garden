import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import inline from "lume/plugins/inline.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import markdown from "lume/plugins/markdown.ts";

import { ptBR } from "npm:date-fns/locale/pt-BR";

const site = lume({
  src: "./",
  dest: "./_site",
});

// Content plugins
site.use(markdown());
site.use(codeHighlight());
site.use(
  date({
    locales: { ptBR },
  }),
);

// SEO & Performance plugins
site.use(metas());
site.use(sitemap());

// Optimization plugins
site.use(inline());
site.use(minifyHTML());

// Assets
site.add("styles.css");
site.copy("assets", ".");

export default site;
