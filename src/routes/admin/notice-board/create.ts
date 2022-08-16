import { Router, Request, Response } from "express";
import { NoticeBoard } from "../../../models/notice-board";
import { CreateNoticeBoardItemDto } from "../../../types/notice-board";

const router = Router();
router.post(
  "/notice-board/item/create",
  async (req: Request, res: Response) => {
    const noticeBoardItemInfo: CreateNoticeBoardItemDto =
      req.body as CreateNoticeBoardItemDto;
    const noticeBoardItem = await NoticeBoard.create(noticeBoardItemInfo);
    return res
      .status(200)
      .send({ message: "Notice Board Item Created.", noticeBoardItem });
  }
);

export { router as createNoticeBoardItemRouter };
