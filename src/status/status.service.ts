import * as mongoose from 'mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel('status') private statusModel: mongoose.Model<Status>,
  ) {}

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    const createdStatus = await this.statusModel.create(createStatusDto);
    return createdStatus;
  }

  async findAll(): Promise<Status[]> {
    const statuses = await this.statusModel.find();
    return statuses;
  }

  async findOne(id: string): Promise<Status> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Status ID is wrong');
    }

    const status = await this.statusModel.findById(id);
    if (!status) {
      throw new NotFoundException('Status not found');
    }
    return status;
  }

  async update(id: string, updateStatusDto: UpdateStatusDto): Promise<Status> {
    return await this.statusModel.findByIdAndUpdate(id, updateStatusDto, {
      new: true,
      runValidatos: true,
    });
  }

  async remove(id: string): Promise<Status> {
    return await this.statusModel.findByIdAndDelete(id);
  }
}
