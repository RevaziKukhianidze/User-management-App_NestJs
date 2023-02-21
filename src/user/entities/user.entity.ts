import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  idNumber: Number;
  @Prop()
  birthDate: string;
  @Prop()
  category: string;
  @Prop()
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
