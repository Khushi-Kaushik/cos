import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { NextResponse } from 'next/server';

// Handle GET request
export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;
  try {
    const product = await Product.findById(id).populate('category');
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

// Handle PUT request
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;
  const body = await req.json(); // Parse the body from the request
  try {
    const product = await Product.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

// Handle DELETE request
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: deletedProduct });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
