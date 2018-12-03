import { createConnection } from "typeorm";
import { Category } from "../entity/Category";

// service layer for categories data

// async functions return Promise instance, and
// inside an async function, we can use await keyword
// to call other async functions like sync functions.
export const getAllCategories = async () => {
    const conn = await createConnection(); // reads info from ormconfig.json
    const repo = await conn.getRepository(Category);
    const categories = await repo.find();
    await conn.close();
    return categories;
};

// an async function, that takes category_id as parameter
// and returns the corresponding category, if found.
export const getOneCategory = async (id) => {
    const conn = await createConnection(); // reads info from ormconfig.json
    const repo = await conn.getRepository(Category);
    const cat = await repo.findOne(id);
    await conn.close();
    return cat;
}