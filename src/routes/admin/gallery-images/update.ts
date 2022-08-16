import { Router, Request, Response } from "express";
import { GalleryImage } from "../../../models/gallery-image";
import { UpdateGalleryImageDto } from "../../../types/gallery-image";

const router = Router();
router.post(
  "/gallery-image/:id/update",
  async (req: Request, res: Response) => {
    const galleryImageInfo: UpdateGalleryImageDto =
      req.body as UpdateGalleryImageDto;
    const galleryImage = await GalleryImage.findById(req.params.id);
    if (!galleryImage) throw new Error("Gallery Image Not Found.");
    galleryImage.url = galleryImageInfo.url
      ? galleryImageInfo.url
      : galleryImage.url;
    galleryImage.altText = galleryImageInfo.altText
      ? galleryImageInfo.altText
      : galleryImage.altText;
    galleryImage.name = galleryImageInfo.name
      ? galleryImageInfo.name
      : galleryImage.name;
    await galleryImage.save();
    return res.status(200).send({ message: "Image Updated.", galleryImage });
  }
);

export { router as updateGalleryImageRouter };
