import Head from 'next/head';

type MetaTagsProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  urlCanonical?: string;
};

const MetaTags = ({
  title,
  description,
  keywords,
  image,
  url,
  urlCanonical
}: MetaTagsProps) => {
  return (
    <Head>
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="keywords" content={keywords || ''} />
      <meta name="name" content={title || ''} />
      <meta name="image" content={image || '/images/logo.png'} />

      <meta property="og:title" content={title || ''} />
      <meta property="og:url" content={url || 'https://www.minhaurl.com.br/'} />
      <meta property="og:image" content={image || '/images/logo.png'} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:site_name" content="BRASA - Economia de Energia" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />

      <link
        rel="canonical"
        href={urlCanonical || 'https://www.minhaurl.com.br/'}
      />
      <link
        rel="alternate"
        href="https://www.minhaurl.com.br/"
        hrefLang="x-default"
      />
      <link rel="alternate" href="https://www.minhaurl.com.br/" hrefLang="pt" />
      <link
        rel="alternate"
        href="https://www.minhaurl.com.br/"
        hrefLang="pt-br"
      />
      <link
        rel="alternate"
        href="https://www.minhaurl.com.br/"
        hrefLang="pt-pt"
      />
    </Head>
  );
};

export default MetaTags;
