import { Router } from "express";
import {
  createMenuItemController,
  deleteMenuItemByIdController,
  getAllMenuItemsController,
  getMenuItemByIdController,
  updateMenuItemByIdController,
} from "../controllers/menuItem.js";

const router = Router({ mergeParams: true });

router.route("/").get(getAllMenuItemsController).post(createMenuItemController);
router
  .route("/:menuItemId")
  .get(getMenuItemByIdController)
  .put(updateMenuItemByIdController)
  .delete(deleteMenuItemByIdController);

export default router;
