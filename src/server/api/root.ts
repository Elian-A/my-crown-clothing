import categories from "./routers/categories";
import products from "./routers/products";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  products: products,
  categories: categories,
});

// export type definition of API
export type AppRouter = typeof appRouter;
