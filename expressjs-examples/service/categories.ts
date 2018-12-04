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
    categories.forEach(c => delete c.picture);
    await conn.close();
    return categories;
};

// an async function, that takes category_id as parameter
// and returns the corresponding category, if found.
export const getOneCategory = async (id) => {
    const conn = await createConnection(); // reads info from ormconfig.json
    const repo = await conn.getRepository(Category);
    const cat = await repo.findOne(id);
    delete cat.picture;
    await conn.close();
    return cat;
}
export const getCategoryPicture = async (id) => {
    const conn = await createConnection(); // reads info from ormconfig.json
    const repo = await conn.getRepository(Category);
    const cat = await repo.findOne(id);
    await conn.close();
    return cat.picture;
}

export const addNewCategory = async (category) => {

    // basic validations
    if (!category || typeof category != 'object') {
        throw new Error('Category was not supplied or was not an object');
    }

    if (!category.name) {
        throw new Error('Category name is mandatory, but was not supplied.')
    }

    const conn = await createConnection(); // reads info from ormconfig.json
    const repo = await conn.getRepository(Category);
    await repo.insert(category);
    await conn.close();
    return category; // with id
}

export const deleteCategory = async (id) => {
    const conn = await createConnection();
    await conn.manager.delete(Category, id);
    await conn.close();
}