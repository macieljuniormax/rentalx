import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  // private categoriesRepository: CategoriesRepository;
  // constructor(categoriesRepository: CategoriesRepository) {
  //   this.categoriesRepository = categoriesRepository;
  // }

  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExistis) {
      throw new Error("Category Already Existis");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
