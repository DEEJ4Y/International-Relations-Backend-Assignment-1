import menuItemRouter from "./menuItem.js";

export default function APIs(app) {
  app.use("/api/v1/menuItems", menuItemRouter);
}
