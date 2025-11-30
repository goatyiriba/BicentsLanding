import { json, LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";

import globalStyles from "~/styles/globals.css?url";
import i18next from "./lib/i18next.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";

const SITE_URL = "https://bicents.xyz";
const SITE_NAME = "Bicents";
const SITE_DESCRIPTION = "We are building software to improve billions people lives.";
const SITE_IMAGE = `${SITE_URL}/imgs/logo.png`;

export const meta: MetaFunction = () => {
  return [
    { title: SITE_NAME },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "keywords", content: "Bicents, technology, software, innovation, digital solutions, web development, mobile apps" },
    { name: "author", content: "Bicents" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#1A1A1A" },
    { name: "msapplication-TileColor", content: "#1A1A1A" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: SITE_NAME },
    { property: "og:description", content: SITE_DESCRIPTION },
    { property: "og:image", content: SITE_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:locale", content: "fr_FR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@bicents" },
    { name: "twitter:title", content: SITE_NAME },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:image", content: SITE_IMAGE },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon.png",
  },
  {
    rel: "stylesheet",
    href: globalStyles,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  {
    rel: "preconnect",
    href: "https://cdn.rawgit.com",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.rawgit.com/mfd/e7842774e037edf15919037594a79b2b/raw/665bdfc532094318449f1010323c84013d5af953/graphik.css",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  const url = new URL(request.url);
  const canonicalUrl = `${SITE_URL}${url.pathname}`;
  return json({ locale, canonicalUrl });
}

export const handle = {
  i18n: "common",
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const locale = data?.locale || "fr";
  const canonicalUrl = data?.canonicalUrl || SITE_URL;
  const { i18n } = useTranslation();

  useChangeLanguage(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bicents",
    "url": "https://bicents.xyz",
    "logo": "https://bicents.xyz/imgs/logo.png",
    "description": "We are building software to improve billions people lives.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    }
  };

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
