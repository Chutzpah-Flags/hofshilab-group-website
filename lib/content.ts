import type { ComponentType } from "react";
import type { IMG } from "./images";

export type ContentMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  image: keyof typeof IMG;
};

export type ContentEntry = {
  meta: ContentMeta;
  load: () => Promise<{ default: ComponentType }>;
};

/**
 * Local MDX registry. Post bodies live in /content as .mdx files; metadata is
 * declared here so list pages can render without compiling every post.
 * Add a new entry to publish a post.
 */
export const blogPosts: ContentEntry[] = [
  {
    meta: {
      slug: "residencia-fiscal-onde-comecar",
      title: "Residência fiscal: por onde começar",
      excerpt:
        "Mudar de residência fiscal é estratégico. Veja o passo a passo para começar com segurança e legalidade.",
      date: "2026-05-28",
      category: "Impostos",
      readingTime: "5 min",
      image: "dunes",
    },
    load: () => import("@/content/blog/residencia-fiscal-onde-comecar.mdx"),
  },
  {
    meta: {
      slug: "segunda-cidadania-plano-b",
      title: "Segunda cidadania: o seu plano B",
      excerpt:
        "Um segundo passaporte é a forma mais concreta de construir um plano B sólido. Conheça os caminhos.",
      date: "2026-05-12",
      category: "Cidadania",
      readingTime: "4 min",
      image: "departureBoard",
    },
    load: () => import("@/content/blog/segunda-cidadania-plano-b.mdx"),
  },
  {
    meta: {
      slug: "empresa-no-exterior-guia",
      title: "Empresa no exterior: guia para escolher a jurisdição",
      excerpt:
        "O destino certo depende do seu modelo de negócio. Veja os fatores que realmente importam.",
      date: "2026-04-30",
      category: "Negócios",
      readingTime: "6 min",
      image: "cityDusk",
    },
    load: () => import("@/content/blog/empresa-no-exterior-guia.mdx"),
  },
];

export const projects: ContentEntry[] = [
  {
    meta: {
      slug: "relocacao-familia-portugal",
      title: "Relocação de uma família para Portugal",
      excerpt:
        "Residência, estrutura empresarial e otimização fiscal coordenadas em menos de doze meses.",
      date: "2026-03-18",
      category: "Relocação",
      readingTime: "Caso",
      image: "paris",
    },
    load: () => import("@/content/projetos/relocacao-familia-portugal.mdx"),
  },
  {
    meta: {
      slug: "estrutura-internacional-investidor",
      title: "Estrutura internacional para um investidor",
      excerpt:
        "Diversificação patrimonial e residência por investimento, com segurança jurídica e conformidade.",
      date: "2026-02-22",
      category: "Patrimônio",
      readingTime: "Caso",
      image: "mountainRoad",
    },
    load: () => import("@/content/projetos/estrutura-internacional-investidor.mdx"),
  },
];

export function getEntry(entries: ContentEntry[], slug: string) {
  return entries.find((e) => e.meta.slug === slug);
}
