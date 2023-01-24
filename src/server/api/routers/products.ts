import { createTRPCRouter, publicProcedure } from "../trpc";

const products = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.product.findMany({ include: { category: true } })
  ),
});

export default products;
