import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = "/og-image.png", 
  url = "https://svg.lk/",
  type = "website"
}) => {
  const siteTitle = "SoftVision IT Group (Pvt) Ltd";
  const defaultDescription = "Transform your digital infrastructure with enterprise-grade software solutions in Sri Lanka. POS, Payroll, Busy Software, and Custom Development.";
  const defaultKeywords = "enterprise software, digital transformation, software solutions, POS, Payroll, Busy Software, Sri Lanka, Web Development";

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SoftVisionIT" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
