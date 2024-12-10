import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
  title: string
  category: string
  ingredients: string[]
  instructions: string
  image?: string
}

const RecipeSchema: Schema = new Schema({
  title: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  ingredients: {
    type: [String],
    require: true
  },
  instructions: {
    type: String,
    require: true
  },
  image: {
    type: String,
  }

})

export default mongoose.model<IRecipe>('Recipe', RecipeSchema)
