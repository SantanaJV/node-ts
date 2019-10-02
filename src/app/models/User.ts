import { Schema, model, Document } from 'mongoose'

interface UserSchemaInterface extends Document {
  name?: string,
  email: string,
  password?: string,
  function(): string
}

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: String
}, { timestamps: true })

UserSchema.methods.function = function (): string {
  return 'I am a function!'
}

export default model<UserSchemaInterface>('User', UserSchema)
