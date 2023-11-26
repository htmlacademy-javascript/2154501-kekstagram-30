//import {createPage } from './data.js';
//import {renderThumbnails} from './picture.js';
import './big-picture.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './function';
import { initFilter } from './filters.js';

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }

}

bootstrap();

