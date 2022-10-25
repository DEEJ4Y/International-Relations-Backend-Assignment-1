import asyncHandler from "../middleware/async.js";
import {
  createMenuItemService,
  deleteMenuItemByIdService,
  getAllMenuItemsService,
  getMenuItemByIdService,
  updateMenuItemByIdService,
} from "../services/menuItem.js";
import ErrorResponse from "../utils/ErrorResponse.js";

/**
 * Controller function to get all menu items
 *
 * @method GET
 * @route /api/v1/menuItems
 * @query page
 * @query limit
 */
export const getAllMenuItemsController = asyncHandler(
  async (req, res, next) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const menuItems = await getAllMenuItemsService(page, limit);

    if (!menuItems)
      return next(new ErrorResponse("Failed to fetch menu items.", 500));

    res.status(200).json({
      success: true,
      message: "The menu items were found.",
      data: menuItems,
    });
  }
);

/**
 * Controller function to add a menu item
 *
 * @method POST
 * @route /api/v1/menuItems
 * @body Menu item data
 */
export const createMenuItemController = asyncHandler(async (req, res, next) => {
  const menuItem = await createMenuItemService(req.body);

  if (!menuItem)
    return next(new ErrorResponse("Failed to create menu item.", 500));

  res.status(200).json({
    success: true,
    message: "The menu item was created.",
    data: menuItem,
  });
});

/**
 * Controller function to get a menu item
 *
 * @method GET
 * @route /api/v1/menuItems/:menuItemId
 */
export const getMenuItemByIdController = asyncHandler(
  async (req, res, next) => {
    const menuItemId = req.params.menuItemId;

    if (!menuItemId || menuItemId.length !== 24)
      return next(new ErrorResponse("Please add a menu item id.", 400));

    const menuItem = await getMenuItemByIdService(menuItemId);

    if (!menuItem)
      return next(new ErrorResponse("Failed to fetch menu item.", 500));

    res.status(200).json({
      success: true,
      message: "The menu item was found.",
      data: menuItem,
    });
  }
);

/**
 * Controller function to update a menu item
 *
 * @method PUT
 * @route /api/v1/menuItems/:menuItemId
 */
export const updateMenuItemByIdController = asyncHandler(
  async (req, res, next) => {
    const menuItemId = req.params.menuItemId;

    if (!menuItemId || menuItemId.length !== 24)
      return next(new ErrorResponse("Please add a menu item id.", 400));

    const menuItem = await updateMenuItemByIdService(menuItemId, req.body);

    if (!menuItem)
      return next(new ErrorResponse("Failed to update menu item.", 500));

    res.status(200).json({
      success: true,
      message: "The menu item was updated.",
      data: menuItem,
    });
  }
);

/**
 * Controller function to delete a menu item
 *
 * @method DELETE
 * @route /api/v1/menuItems/:menuItemId
 */
export const deleteMenuItemByIdController = asyncHandler(
  async (req, res, next) => {
    const menuItemId = req.params.menuItemId;

    if (!menuItemId || menuItemId.length !== 24)
      return next(new ErrorResponse("Please add a menu item id.", 400));

    const menuItem = await deleteMenuItemByIdService(menuItemId);

    if (!menuItem)
      return next(new ErrorResponse("Failed to delete menu item.", 500));

    res.status(200).json({
      success: true,
      message: "The menu item was deleted.",
      data: menuItem,
    });
  }
);
