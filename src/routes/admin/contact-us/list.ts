import { Router, Request, Response } from "express";
import { ContactUs } from "../../../models/contact-us";

const router = Router();
router.get("/contact-us/list", async (req: Request, res: Response) => {
  const contactUs = await ContactUs.find();
  return res.status(200).send({ contactUs });
});

export { router as listContactUsRouter };
