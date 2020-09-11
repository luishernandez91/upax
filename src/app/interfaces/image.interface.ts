/**
 * Carousel image interface
 */
export interface CarouselImageInterface {
  id: string;
  url: string;
}

/**
 * Picsum image interface
 */
export interface PicsumImageInterface {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
