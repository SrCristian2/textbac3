import { Router } from "express";
import { body } from "express-validator";
import postCtrl from "../controllers/post.controller.js";
import { upload } from "../middlewares/imgUpload.js";
import { validFields } from "../middlewares/validFields.js";

const route = Router();

route.get("/", postCtrl.listar);
route.get("/:id", postCtrl.listOne);
route.post(
  "/",

  body("title", "el campo title es obligatorio").optional({checkFalsy:true}),
  body("description", "el campo description es obligatorio").optional({checkFalsy:true}),
  body("imgUrl").optional(),

  validFields,
  upload.single("img"),
  postCtrl.add
);
route.delete("/:id", postCtrl.delete);
route.put("/:id", upload.single("img"), postCtrl.update);

export default route;
