import mongoose from "mongoose";

export interface GalleryImageAttr {
  url: string;
  name: string;
  altText?: string;
  hasRemoved: boolean;
}
export interface GalleryImageDoc extends mongoose.Document {
  url: string;
  name: string;
  altText?: string;
  hasRemoved: boolean;
}

export const galleryImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: false,
  },
  hasRemoved: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const GalleryImage = mongoose.model(
  "galleryImage",
  galleryImageSchema,
  "galleryImage"
);
