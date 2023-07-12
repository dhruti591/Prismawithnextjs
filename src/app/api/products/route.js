import { createProduct, deleteProduct, getAllProducts } from "../../../../prisma/product";
import { NextResponse } from 'next/server';



export async function POST(req, res) {
    const { image, title, price, category } = await req.json();
    // console.log("reqbosy",image, title, price, category);
    const new_product = await createProduct(image, title, price, category);
    // return NextResponse.json({ image, title, price, category });
    return NextResponse.json(req.body);
}

// export async function GET(req, res) {
//     const products = await getAllProducts();
//     return NextResponse.json(products);
// }
export default async function DELETE(req, res) {
  const { id } = await req.json();
  console.log(id); // for some validations
  
  await deleteProduct(id);
  
  return res.status(200).json({ message: "Product deleted" });
}
