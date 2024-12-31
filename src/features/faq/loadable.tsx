import dynamic from "next/dynamic";

export const LazyFaq = dynamic(() => import("./faq").then(mod => mod.Faq));
