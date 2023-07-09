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
export async function DELETE(req, res) {
    const request = await req.json();
    console.log(request);
        await deleteProduct(id);
    return NextResponse.json({ message: "product deleted" });
}