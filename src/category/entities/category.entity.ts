import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Category {
  @Prop()
  categoryName: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
