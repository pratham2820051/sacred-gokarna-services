import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    type?: string;
    image?: string;
    structuredData?: object | object[];
}

// Organization schema — included on every page (site-wide)
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Narayana Bali Tripindi - Sacred Gokarna Services",
    "url": "https://narayanabalitripindi.com/",
    "logo": "https://narayanabalitripindi.com/logo.png",
    "description": "Authentic Narayana Bali, Tripindi Shraddha and Nag Bali pooja services performed by certified Vedic priests in Gokarna, Karnataka.",
    "sameAs": [
        "https://www.instagram.com/gokarnapooja9/",
        "https://www.youtube.com/@GokarnaPooja"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9901801625",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "kn", "hi"]
    }
};

export const SEO = ({
    title,
    description,
    keywords,
    canonical = 'https://narayanabalitripindi.com',
    type = 'website',
    image = 'https://narayanabalitripindi.com/og-image.jpg',
    structuredData
}: SEOProps) => {
    // Normalize structuredData to always be an array
    const schemas: object[] = [];
    if (structuredData) {
        if (Array.isArray(structuredData)) {
            schemas.push(...structuredData);
        } else {
            schemas.push(structuredData);
        }
    }
    // Always include Organization schema
    schemas.push(organizationSchema);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) — one script per schema */}
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};
