import { user, users } from "../../data/data";

class UserService{
    
  auth(element:user){
    const search = users.find((e: user) => e.login === element.login);
    
    if (
      search !== undefined && search?.password === element.password
    ) {
      return true;
    } else {
      return false;
    }
  };

}

const userService = new UserService();
export default userService;