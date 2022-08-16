import { Router, Request, Response } from "express";
import { NoticeBoard } from "../../models/notice-board";

const router = Router();
router.get("/notice-board/list", async (req: Request, res: Response) => {
  const noticeBoard = await NoticeBoard.find({ hasArchieved: false });
  return res.status(200).send({ noticeBoard });
});

export { router as listNoticeBoardItemRouter };
