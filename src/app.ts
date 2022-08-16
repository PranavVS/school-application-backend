import express, { Request, Response } from "express";
import { json } from "body-parser";

import "express-async-errors";
import { errorHandler } from "./middlewares/error-handler";
import { saveContactUsInfoRouter } from "./routes/contact-us/save";
import { listContactUsRouter } from "./routes/admin/contact-us/list";
import { deleteContactUsRouter } from "./routes/admin/contact-us/delete";
import { createGalleryImageRouter } from "./routes/admin/gallery-images/create";
import { updateGalleryImageRouter } from "./routes/admin/gallery-images/update";
import { deleteGalleryImageRouter } from "./routes/admin/gallery-images/delete";
import { viewGalleryImagesRouter } from "./routes/gallery/view";
import { createNoticeBoardItemRouter } from "./routes/admin/notice-board/create";
import { deleteNoticeBoardItemRouter } from "./routes/admin/notice-board/delete";
import { listNoticeBoardItemRouter } from "./routes/notice-board/list";
import { updateNoticeBoardItemRouter } from "./routes/admin/notice-board/update";
const App = express();
App.use(json());
App.use(saveContactUsInfoRouter);

//Normal User Routes
App.use(viewGalleryImagesRouter);
App.use(listNoticeBoardItemRouter);
//Admin-Routes

//contact-up routes
App.use(listContactUsRouter);
App.use(deleteContactUsRouter);

//Gallery-image-routes
App.use(createGalleryImageRouter);
App.use(updateGalleryImageRouter);
App.use(deleteGalleryImageRouter);

//Notice-Board Item Routes
App.use(createNoticeBoardItemRouter);
App.use(deleteNoticeBoardItemRouter);
App.use(updateNoticeBoardItemRouter);
App.all("*", (req: Request, res: Response) => {
  throw new Error(`Route not Initialized. Route: ${req.url}`);
});

App.use(errorHandler);
export { App };
