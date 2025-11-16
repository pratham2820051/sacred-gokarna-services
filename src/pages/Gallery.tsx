import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight } from "lucide-react";
import templeComplex from "@/assets/temple-complex.jpg";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";
import Astrology from "@/assets/Astrology.jpg";

const Gallery = () => {
  // Add your Google Drive 
  const poojaImages = [
    templeComplex
    ];

  const acRoomImages = [
    
   rudrabhisheka
  ];

  const nonAcRoomImages = [
    spiritualOm,
    Astrology
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
