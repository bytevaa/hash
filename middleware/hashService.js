import bcrypt from "bcrypt";

class HashServce {
  async hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10) //генеррует

        const hash = await bcrypt.hash(password, salt) 
        console.log(hash);
        return hash
        
    } catch (err) {}
  }
}

export default new HashServce();
