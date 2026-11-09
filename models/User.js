import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email: {
        type: String ,
        required:  [true , "Почта не может быть пустой!"], 
        unique: true,
        match: [/^\S+@\S+\.\S+$/ ,  "введите корректный email"]
        
    }, 
    password: {
        type: String, 
        required: [true , "пароль обязателен! "],
        minLength: [6, "пароль должен быть не менее 6 символов"]
    },
    name: {
        type: String,
        required: [true , "Имя не может быть пустым! "]
    },
    lastname: {
        type: String,
        required: [true , "фамилия не может быть пустой! "]
    },
    numphone: {
        type: String,
        
    }
})

export default mongoose.model("User", UserSchema)