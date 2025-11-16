import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight } from "lucide-react";


const Gallery = () => {
  // Add your Google Drive 
 const poojaImages = [
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763313486/DSC_0001_skor9p.jpg",
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763313997/GOPR2088_rhxdel.jpg",
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314017/DSC_0020_zoir2o.jpg",
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314059/DSC_0084_dmuhb2.jpg",
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314383/DSC_0075_cthnrr.jpg",
  "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314460/DSC_0095_swhffc.jpg"
];

  const acRoomImages = [
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314807/DSC_0113_aoyfnj.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314804/DSC_0288_jlxvvn.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314800/GOPR2009_n704ci.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314798/DSC_0193_jgjnzn.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314796/DSC_0148_ntf3c5.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314773/DSC_0233_ns1eyl.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314771/DSC_0228_ufk72x.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314756/GOPR2008_pzo45e.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314748/GOPR2045_kgljz6.jpg",
    // "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763314746/DSC_0286_dpgr79.jpg"
];

  const nonAcRoomImages = [
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763315086/DSC_0037_rozawt.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763315085/DSC_0041_gsn0c6.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763315084/DSC_0013_vmicvc.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763315080/DSC_0032_bt1am1.jpg",
    "https://res.cloudinary.com/dkc3ztbuo/image/upload/v1763315074/DSC_0062_xf1wqi.jpg"
 ];

  
  const renderSection = (title: string, images: string[]) => (
    <div className="mb-16">
      
      <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
        {title}
      </h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <Card
            key={index}
            className="sacred-card divine-hover overflow-hidden group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={src}
                alt={`${title}-${index}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* <CardContent className="p-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">{title}</p>
              <ArrowRight className="w-4 h-4 text-primary" />
            </CardContent> */}
          </Card>
        ))}
      </div>

    
      <div className="w-full h-px bg-muted my-12"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-5xl font-playfair font-bold text-primary mb-16">
        Gallery
      </h1>

      {renderSection("Pooja", poojaImages)}
      {renderSection("AC Room", acRoomImages)}
      {renderSection("Non AC Room", nonAcRoomImages)}
    </div>
  );
};

export default Gallery;
