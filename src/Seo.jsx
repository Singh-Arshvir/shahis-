import { Helmet } from 'react-helmet-async'

function SEO({
  title = 'Shahi Engineers & Architects | Architecture & Engineering Services',
  description = 'Shahi Engineers & Architects provides professional architecture, structural engineering, interior design, construction planning, and innovative building solutions.',
  keywords = 'Shahi Engineers, Shahi Architects, architects in Punjab, civil engineers in Punjab, architecture firm, structural engineering, interior design, building design, construction planning',
  image = '/og-image.jpg',
  url = 'https://shahis.vercel.app.com',
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="author" content="Shahi Engineers & Architects" />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph - Facebook, WhatsApp, LinkedIn */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      <meta property="og:site_name" content="Shahi Engineers & Architects" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="theme-color" content="#111111" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ArchitecturalOrganization',
          name: 'Shahi Engineers & Architects',
          description,
          url,
          logo: `${url}/logo.jpeg`,
          image: `${url}/og-image.jpg`,
          areaServed: 'Punjab, India',
          knowsAbout: [
            'Architecture',
            'Civil Engineering',
            'Structural Engineering',
            'Interior Design',
            'Construction Planning',
            'Building Design',
          ],
        })}
      </script>
    </Helmet>
  )
}

export default SEO
