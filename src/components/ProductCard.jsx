import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import addToCartById from "../modules/CartLogic";
   
  export function EcommerceCard(product) {
    return (
      <Card className="max-w-96 max-h-[450px]" >
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={product.product.imageUrl}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product.product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${product.product.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {product.product.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() => addToCartById(product.product.id)}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }