import "dotenv/config";
import { StatusCodes } from "http-status-codes";
import usermodel from "../Models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import {error,success} from "../Utils/responseWrapper.js"


const ACCESS_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;

export  async function SignupController(request, response) {
    try  {
        const{email,password,name}=req.body;
        if(!email||!password||!name){
            return response.send(error(StatusCodes.BAD_REQUEST,"All Fields are Required"));
        }
        const oldUser= await usermodel.findOne({email});
        if (oldUser) {
            return response.status(StatusCodes.BAD_REQUEST).send(error(StatusCodes.BAD_REQUEST,"User already exists"));
        }
        const hashedpassword= await bcrypt.hash(password,10);
        request.body['password'] = hashedpassword;
        const user = await usermodel.created(request.body);
        const newuser= await usermodel.findById(user._id);
        return response.send(success(StatusCodes.CREATED,newuser));

    } catch (e) {
        return response.send(error(StatusCodes.BAD_REQUEST,e.message));
    }
}
    export async function loginController(request,response) { 
        try {
            const{email,password}=request.body;
            if(!email||!password)
            return response.status(StatusCodes.BAD_REQUEST).send(error(StatusCodes.BAD_REQUEST,"All fields must be required"));
            const user = await usermodel.findOne({email}).select("+password");

            if (!user) {
                return response.status(StatusCodes.NOT_FOUND).send(error(StatusCodes.NOT_FOUND,"user is not registered"));
            }
            const matched = await bcrypt.compare(password,user.password);
            if (!matched){
                return response.status(StatusCodes.NOT_FOUND).send(error(StatusCodes.NOT_FOUND,"Incorrect password"));
            }

            const accessToken = generateAccessToken({
                email:user.email,
                _id:user._id,
            });
            const refreshToken = generateRefreshToken({
                email:user.email,
                _id:user._id,
            });
            response.cookie('jwt',refreshToken);

        } catch (error) {
            console.log(error);
            return response.send(error(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
        }
    }  

    export async function logoutController(request,response){
        try {
            response.clearCookie('jwt');
            return response.send(success(StatusCodes.SUCCESS,"user logged out"));
            
        } catch (error) {
            return response.send(error(StatusCodes.ERROR,error.message));
        }
    }
    export async function refreshAccessTokenController(req, res) {
        try {
           const mycookie = req.cookies;
           console.log('helllo');
          if(!mycookie.jwt){
             return res.send(error(StatusCodes.BAD_REQUEST , "cookies is required!"));
          }
      
          const refreshToken = mycookie.jwt;
          const decoded = Jwt.verify(refreshToken, REFRESH_SECRET_KEY);
          const { email, id } = decoded;
          const accessToken = generateAccessToken({ email, id });
          return res.send(success(200 , accessToken));
        } 
        catch (e){
          console.log(e.message);
          return res.send(error(404 , "invalid refresh token!"));
        }
      }
      
      const generateAccessToken = (data) => {
        try {
          const token = Jwt.sign(data, ACCESS_SECRET_KEY, {
            expiresIn: "1d",
          });
          return token;
        } catch (e) {
          console.log(e.message);
        }
      }
      
      const generateRefreshToken = (data) => {
        try {
          const token = Jwt.sign(data, REFRESH_SECRET_KEY, {
            expiresIn: "1d",
          });
          return token;
        } catch (e) {
          console.log(e);
        }
      }
