// module: ./controllers/categories
import * as categoryService from '../service/categories';


export const getAll = async (req, resp) => {
    const categories = await categoryService.getAllCategories();
    resp.json(categories);
};

export const getCategoryById = async (req, resp) => {
    // get the id from the path of the request url
    // In the index.ts, we have used :cat_id for the route mapping
    // app.get('/api/categories/:cat_id', getCategoryById);
    
    let id = req.params['cat_id']
    id = parseInt(id); // potential exception 
    resp.json(await categoryService.getOneCategory(id));
}

export const getCategoryPicture = async (req, resp) => {
    let id = req.params['cat_id']
    id = parseInt(id); // potential exception
    let picture = await categoryService.getCategoryPicture(id);
    resp.set('Content-Type', 'image/jpeg')
        .status(200)
        .end(picture);
}

export const addNewCategory = async (req, resp) => {
    try {
        let cat = await categoryService.addNewCategory(req.body);
        resp.json(cat);
    }
    catch (err) {
        resp.status(500).json({ 'error': err.toString() });
    }
}

export const deleteCategory = async (req, resp) => {
    try {
        let id = req.params['cat_id']
        id = parseInt(id); // potential exception
        await categoryService.deleteCategory(id);
        resp.end();
    }
    catch (err) {
        resp.status(500).json({ error: err.toString() });
    }
}