import { Router, Request, Response } from "express";
import { GalleryImage } from "../../../models/gallery-image";

const router = Router();
router.delete(
  "/gallery-image/:id/delete",
  async (req: Request, res: Response) => {
    const galleryImage = await GalleryImage.findById(req.params.id);
    if (!galleryImage) {
      throw new Error(
        `Could Not find Gallery Image Information with id ${req.params.id}`
      );
    }
    galleryImage.hasRemoved = true;
    await galleryImage.save();
    return res
      .status(200)
      .send({ message: "Gallery Image Information Deleted." });
  }
);

export { router as deleteGalleryImageRouter };
