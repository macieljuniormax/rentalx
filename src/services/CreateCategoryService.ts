import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  // private categoriesRepository: CategoriesRepository;
  // constructor(categoriesRepository: CategoriesRepository) {
  //   this.categoriesRepository = categoriesRepository;
  // }

  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExistis) {
      throw new Error("Category Already Existis");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
