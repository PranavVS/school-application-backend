import { Router, Request, Response } from "express";
import { ContactUs } from "../../../models/contact-us";

const router = Router();
router.delete("/contact-us/:id/delete", async (req: Request, res: Response) => {
  const contactUs = await ContactUs.findById(req.params.id);
  if (!contactUs) {
    throw new Error(
      `Could Not find Contact Us Information with id ${req.params.id}`
    );
  }
  await contactUs?.delete();
  return res.status(200).send({ message: "Contact-Us Information Deleted." });
});

export { router as deleteContactUsRouter };
