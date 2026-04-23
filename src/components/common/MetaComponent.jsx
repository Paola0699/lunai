/* eslint-disable react/prop-types */

import { Helmet, HelmetProvider } from "react-helmet-async";

const SITE_URL = "https://www.lunairesetcenter.com.mx";
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/full-width-images/section-bg-3.png`;

export default function MetaComponent({ meta }) {
  const title = meta?.title || "Lunai Reset Center | Retiros de Ibogaína con Supervisión Médica";
  const description =
    meta?.description ||
    "Lunai Reset Center ofrece retiros de ibogaína bajo supervisión médica para tratar adicción, TEPT, depresión resistente, ansiedad y trauma. Programas de 3 a 9 días.";
  const url = meta?.url ? `${SITE_URL}${meta.url}` : `${SITE_URL}/`;
  const image = meta?.image || DEFAULT_IMAGE;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lunai Reset Center" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </HelmetProvider>
  );
}
