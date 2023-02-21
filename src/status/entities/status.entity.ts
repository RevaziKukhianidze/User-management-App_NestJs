import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Status {
  @Prop()
  statusName: string;
}
export const StatusSchema = SchemaFactory.createForClass(Status);
