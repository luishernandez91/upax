import {Component, Input, OnInit} from '@angular/core';
import {ImagesService} from '@services/images/images.service';
import {Observable} from 'rxjs';
import {CarouselImageInterface} from '@interfaces/image.interface';

@Component({
  selector: 'upax-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * Handle response from image service
   */
  images$: Observable<Array<CarouselImageInterface>>;
  /**
   * Required image width size
   */
  @Input() imageWidth: string;
  /**
   * Required image height size
   */
  @Input() imageHeight: string;
  /**
   * Required number of required images
   */
  @Input() imageItems: number;

  /**
   * Component constructor
   * @param imageService Image service injection
   */
  constructor(private imageService: ImagesService) {
    Object.assign(this, initialValues);
  }

  /**
   * Initial component life hook
   */
  ngOnInit(): void {
    this.images$ = this.imageService.getImages(this.imageItems, this.imageWidth, this.imageHeight);
  }
}

const initialValues = {
  imageWidth: 500,
  imageHeight: 400,
  imageItems: 10
};
