import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  constructor(private importanteCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importanteCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
