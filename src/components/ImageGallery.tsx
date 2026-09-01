import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Img } from "@/components/Img";
import type { ImageName } from "@/data/imageManifest";

interface ImageGalleryProps {
  /** Manifest keys, e.g. "HotDesk1" — resolved to responsive variants in /Images/opt/. */
  images: ImageName[];
  /** Describes what the photographs show; used as the base for each image's alt text. */
  alt?: string;
}

export default function ImageGallery({ images, alt = "The Cowork workspace in Lahore" }: ImageGalleryProps) {
  return (
    <Carousel className="w-full max-w-xs mx-auto my-10">
      <CarouselContent>
        {images.map((name, index) => (
          <CarouselItem key={name}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Img
                    name={name}
                    sizes="(max-width: 640px) 90vw, 320px"
                    alt={`${alt} — photo ${index + 1} of ${images.length}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
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
