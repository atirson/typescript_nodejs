import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCatergoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = null;

const importCategoryUseCase = new ImportCatergoryUseCase(categoriesRepository);
const importCatergoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCatergoryController };
