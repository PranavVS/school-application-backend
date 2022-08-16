import { Router, Request, Response } from "express";
import { GalleryImage } from "../../../models/gallery-image";
import { CreateGalleryImageDto } from "../../../types/gallery-image";

const router = Router();
router.post("/gallery-image/create", async (req: Request, res: Response) => {
  const galleryImageInfo: CreateGalleryImageDto =
    req.body as CreateGalleryImageDto;
  const galleryImage = await GalleryImage.create(galleryImageInfo);
  return res.status(200).send({ message: "Image Created.", galleryImage });
});

export { router as createGalleryImageRouter };
