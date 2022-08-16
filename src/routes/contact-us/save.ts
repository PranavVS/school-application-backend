import { Router, Request, Response } from "express";
import { ContactUs } from "../../models/contact-us";
import { SaveContactUsDetailsDto } from "../../types/contact-us";

const router = Router();
router.post("/contact-us/save", async (req: Request, res: Response) => {
  const contactInfo = req.body as SaveContactUsDetailsDto;
  await ContactUs.create(contactInfo);
  return res.status(200).send({ message: "Thanks for Contacting Us." });
});

export { router as saveContactUsInfoRouter };
