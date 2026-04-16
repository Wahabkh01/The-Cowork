import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <Carousel className="w-full max-w-xs mx-auto my-10">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src={image} alt={`Space image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
