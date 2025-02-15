import { NextResponse } from 'next/server';
import Product from '../../models/Product'; // Adjust path if needed
import dbConnect from '../../utils/dbConnect'; // Ensure database connection utility

// Ensure a connection to the database
dbConnect();

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const product = new Product(body); // Create a new product instance
    await product.save(); // Save to the database

    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


export async function GET(req: Request) {
  const products = await Product.find();
  return NextResponse.json({ success: true, products });
}
