import * as mongoose from 'mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('category') private categoryModel: mongoose.Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = await this.categoryModel.create(createCategoryDto);
    return createdCategory;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async findOne(id: string): Promise<Category> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Category ID is wrong');
    }

    const category = await this.categoryModel.findById(id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndDelete(id);
  }
}
