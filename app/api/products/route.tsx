import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(request: NextRequest) {
  return NextResponse.json([
    // create a dummy product arry with id, price and name
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //Validate
  //if invalid, return 400
  //else return
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  ); // because 201 is for created status code in http
}
