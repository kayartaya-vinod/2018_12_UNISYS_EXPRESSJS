// module: ./controllers/categories
import { getAllCategories, getOneCategory } from '../service/categories';


export const getAll = async (req, resp) => {
    const categories = await getAllCategories();
    resp.json(categories);
};

export const getCategoryById = async (req, resp) => {
    // get the id from the path of the request url
    // In the index.ts, we have used :cat_id for the route mapping
    // app.get('/api/categories/:cat_id', getCategoryById);
    
    let id = req.params['cat_id']
    id = parseInt(id); // potential exception 
    resp.json(await getOneCategory(id));
}