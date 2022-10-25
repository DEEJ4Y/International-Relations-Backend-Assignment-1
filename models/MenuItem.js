import mongoose from "mongoose";

/**
 * Schema for the menu items.
 */
const MenuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name for the dish."],
      validate: (name) => {
        return name.length > 0;
      },
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      validate: (price) => {
        return price > 0;
      },
    },
    category: {
      type: String,
      enum: [
        "Appetizers",
        "Soups",
        "Salads",
        "Entrees",
        "Sides",
        "Desserts",
        "Beverages",
      ],
      required: [true, "Please choose a category."],
    },
    spiceLevel: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
    foodType: {
      type: String,
      enum: ["Non-Veg", "Veg", "Egg"],
      default: "Veg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", MenuItemSchema);
