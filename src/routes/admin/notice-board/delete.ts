import { Router, Request, Response } from "express";
import { NoticeBoard } from "../../../models/notice-board";

const router = Router();
router.delete(
  "/notice-board/item/:id/delete",
  async (req: Request, res: Response) => {
    const noticeBoardItem = await NoticeBoard.findById(req.params.id);
    if (!noticeBoardItem) {
      throw new Error(
        `Could Not find Notice Board Item Information with id ${req.params.id}`
      );
    }
    noticeBoardItem.hasArchieved = true;
    await noticeBoardItem.save();
    return res
      .status(200)
      .send({ message: "Notice Board Item Information Deleted." });
  }
);

export { router as deleteNoticeBoardItemRouter };
