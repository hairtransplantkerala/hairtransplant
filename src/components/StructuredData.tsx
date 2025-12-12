export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eterno Hair Transplant Clinic",
    "image": "https://eternoclinic.com/logo.jpg",
    "description": "Leading hair transplant clinic in Kochi, Kerala offering FUE, FUT, DHI procedures",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Eterno Clinic",
      "addressLocality": "4th Floor, AC Estate, Janatha Junction, S.A. Road, Vytilla",
      "addressRegion": "Kochi, Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "telephone": "+919645921944",
    "email": "eternocosmeticsurgery@gmail.com",
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Sa 09:00-18:00",
    "url": "https://eternoclinic.com"
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Chacko Cyriac",
    "medicalSpecialty": "Plastic Surgery, Hair Restoration",
    "alumniOf": "PGI Chandigarh",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Eterno Hair Transplant Clinic"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
    </>
  );
}
