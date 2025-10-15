import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
    handler(ctx) {
        return ctx.db.query("todos").order("desc").collect();
    }
});

export const addTodo = mutation({
    args: { text: v.string() },
    handler(ctx, { text }) {
        return ctx.db.insert("todos", { text, isComplete: false });
    }
});

export const toggleTodo = mutation({
    args: {id : v.id("todos")},
    async handler(ctx, {id}) {
        const todo = await ctx.db.get(id);
        if(!todo) {
            throw new Error("Todo not found");
        }
        await ctx.db.patch(id, {isComplete : !todo.isComplete});
    }
});

export const deleteTodo = mutation({
    args : {id : v.id("todos")},
    handler: async (ctx, args) => {
        return await ctx.db.delete(args.id);
    }
});

export const updateTodo = mutation({
    args : {id : v.id("todos"), text : v.string()},
    handler : async (ct, args) => {
        return await ct.db.patch(args.id, {text : args.text});
    }

});

export const clearAllTodos = mutation({
    handler : async (ctx) => {
        const allTodos = await ctx.db.query("todos").collect();
        for(const todo of allTodos) {
            await ctx.db.delete(todo._id);
        }

        return {deletedCount : allTodos.length}
    }
})
