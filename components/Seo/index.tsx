import { ISeo } from "@/types";

const Seo = () => {
  return (
    <head>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
      <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />

      {/* Apple Touch Icons */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon-180x180.png"
      />
      {/* Default Size */}
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
    </head>
  );
};

export default Seo;
