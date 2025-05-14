
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryItemData } from "@/data/kurskaya-bitva/gallery";

interface GallerySectionProps {
  images: GalleryItemData[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ГАЛЕРЕЯ</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">{image.caption}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
