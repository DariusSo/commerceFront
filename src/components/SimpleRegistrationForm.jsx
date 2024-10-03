import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import registration, { login } from "../modules/LoginAndRegistration";
   
  export function SimpleRegistrationForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          {isRegistered ? "Log In" : "Sign Up"}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          { isRegistered ? "Registration was successful, please log in" : "Nice to meet you! Enter your details to register."}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {isRegistered ? 
          <Button 
            onClick={() => login(email, password, setIsRegistered, setEmail, setPassword)}
            className="mt-6" fullWidth>
                LOG IN
          </Button> :
          <Button 
          onClick={() => registration(email, password, setIsRegistered, setEmail, setPassword)}
          className="mt-6" fullWidth>
            SIGN UP
          </Button>
          }
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }
