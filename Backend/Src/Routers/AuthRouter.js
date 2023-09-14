import express  from "express";
import { SignupController, 
    loginController, 
    logoutController, 
    refreshAccessTokenController 
} from "../Controllers/authcontrol.js";

const authRouter=express.Router();

authRouter.post('/Signup', SignupController);
authRouter.post('/Login', loginController);
authRouter.post('/Logout', logoutController);
authRouter.get('/refresh', refreshAccessTokenController);   

export default authRouter;