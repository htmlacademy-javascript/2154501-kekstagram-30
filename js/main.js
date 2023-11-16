import {createPage } from './data.js';
import {renderThumbnails} from './picture.js';
import './big-picture.js';

const photos = createPage();
renderThumbnails(photos);
