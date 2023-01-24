import { createTRPCRouter, publicProcedure } from "../trpc";

const categories = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.category.findMany({ select: { id: true, name: true } })
  ),
});
export default categories;
