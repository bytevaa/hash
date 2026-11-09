import User from "../models/User.js"
import hashService from "../middleware/hashService.js"

class UserController{
    async registration(req, res){
        const{name, lastname, email, numphone,  password} = req.body

        const hashPassword = await hashService.hashPassword(password)

        
        const user = await User.create({email, password: hashPassword, name, lastname,  numphone })
        res.status(200).json("регистрация прошла успешно")
    }
}
export default new UserController()