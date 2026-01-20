import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  hi: () => import("./dictionaries/hi.json").then((m) => m.default),
  mr: () => import("./dictionaries/mr.json").then((m) => m.default),
};

export async function getDictionary(lang) {
  return dictionaries[lang]?.() ?? dictionaries.en();
}
