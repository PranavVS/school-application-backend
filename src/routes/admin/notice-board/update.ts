import { Router, Request, Response } from "express";
import { GalleryImage } from "../../../models/gallery-image";
import { NoticeBoard } from "../../../models/notice-board";
import { UpdateNoticeBoardItemDto } from "../../../types/notice-board";

const router = Router();
router.post(
  "/notice-board/item/:id/update",
  async (req: Request, res: Response) => {
    const noticeBoardItemInfo: UpdateNoticeBoardItemDto =
      req.body as UpdateNoticeBoardItemDto;
    const noticeBoardItem = await NoticeBoard.findById(req.params.id);
    if (!noticeBoardItem)
      throw new Error("Notice Board Item Information Not Found.");
    noticeBoardItem.title = noticeBoardItemInfo.title;
    noticeBoardItem.description = noticeBoardItemInfo.description;
    await noticeBoardItem.save();
    return res.status(200).send({
      message: "Notice Board Item Info Updated.",
      noticeBoardItem,
    });
  }
);

export { router as updateNoticeBoardItemRouter };
