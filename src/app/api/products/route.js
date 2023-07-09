import { createProduct, deleteProduct, getAllProducts } from "../../../../prisma/product";
import { NextResponse } from 'next/server';
import { parse } from 'url';

export async function DELETE(req, res) {
    
    const { query } = parse(req.url, true);
        const id = query.id;
    console.log('-------printed id here-------',id);
        await deleteProduct(id);
    return NextResponse.json({ message: "product deleted" });
}

export async function POST(req, res) {
    const { image, title, price, category } = await req.json();
   
    const new_product = await createProduct(image, title, price, category);
    
    return NextResponse.json(req.body);
}

export async function GET(req, res) {
    const products = await getAllProducts();
    return NextResponse.json(products);
}
