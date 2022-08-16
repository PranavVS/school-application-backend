import { Router, Request, Response } from "express";
import { GalleryImage } from "../../models/gallery-image";

const router = Router();
router.get("/gallery/images/list", async (req: Request, res: Response) => {
  const galleryImages = await GalleryImage.find({ hasRemoved: false });
  return res.status(200).send({ images: galleryImages });
});

export { router as viewGalleryImagesRouter };
