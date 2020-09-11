import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CarouselImageInterface, PicsumImageInterface} from '@interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  /**
   * Component constructor
   * @param http Http client module injection
   */
  constructor(private readonly http: HttpClient) {
  }

  /**
   * Get images from picsum api
   * @param limit Number of required images
   * @param width Image width
   * @param height Image height
   * @returns Observable<Array<CarouselImageInterface>>
   */
  getImages(limit: number = 5, width: string, height: string): Observable<Array<CarouselImageInterface>> {
    return this.http.get<Array<PicsumImageInterface>>(`https://picsum.photos/v2/list?page=2&limit=${limit}`)
      .pipe(
        map(response => {
          return [...this.formatPicsumToCarousel(response, width, height)];
        })
      );
  }

  /**
   * Format incoming picsum image data to carousel data
   */
  formatPicsumToCarousel(data: PicsumImageInterface[], width, height): CarouselImageInterface[] {
    return data.map(img => {
      img.download_url = img.download_url.replace(String(img.width), width);
      img.download_url = img.download_url.replace(String(img.height), height);
      return {id: img.id, url: img.download_url};
    });
  }
}
