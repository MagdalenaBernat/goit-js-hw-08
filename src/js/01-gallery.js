"use strict";
import css from "../css/01-gallery.css";
import SimpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('div.gallery');

const createGallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" 
            src="${item.preview}"
            alt="${item.description}"/>
    </a>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});

console.log(galleryItems);
