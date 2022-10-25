import asyncHandler from "../middleware/async.js";
import MenuItem from "../models/MenuItem.js";

/**
 * A service function to get all menu items from the database
 *
 * @param {number} page Pagination page
 * @param {number} limit Pagination limit
 * @returns {MenuItem[]} An array of Menu Items
 */
export const getAllMenuItemsService = asyncHandler(async (page, limit) => {
  let _page = page || 1;
  let _limit = limit || 10;

  return await MenuItem.find({})
    .skip(_page - 1)
    .limit(_limit)
    .select("-createdAt -updatedAt");
});

/**
 * A service function to create a menu item in the database
 *
 * @param {MenuItem} data The data for creating the Menu Item
 * @returns {MenuItem} The created Menu Item
 */
export const createMenuItemService = asyncHandler(async (data) => {
  return await MenuItem.create(data);
});

/**
 * A service function to get a menu item by its ID
 *
 * @param {ObjectId} menuItemId The id of the menu item to be retrieved
 * @returns {MenuItem} The menu item with the matching ID
 */
export const getMenuItemByIdService = asyncHandler(async (menuItemId) => {
  return await MenuItem.findById(menuItemId);
});

/**
 * A service function to update a menu item by its ID
 *
 * @param {ObjectId} menuItemId The id of the menu item to be updated
 * @param {MenuItem} data The data with updated fields
 * @returns {MenuItem} The updated menu item with the matching ID
 */
export const updateMenuItemByIdService = asyncHandler(
  async (menuItemId, data) => {
    return await MenuItem.findByIdAndUpdate(menuItemId, data, {
      new: true,
      runValidators: true,
    });
  }
);

/**
 * A service function to delete a menu item by its ID
 *
 * @param {ObjectId} menuItemId The id of the menu item to be deleted
 * @returns {MenuItem} The menu item with the matching ID
 */
export const deleteMenuItemByIdService = asyncHandler(async (menuItemId) => {
  return await MenuItem.findByIdAndDelete(menuItemId);
});
