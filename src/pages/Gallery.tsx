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
    
  
  ];

  const nonAcRoomImages = [
    
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
