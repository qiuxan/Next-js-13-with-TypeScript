import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest) {
  return NextResponse.json(
    // create a dummy user arry with id and name
    [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Ian Q" },
    ]
  );
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  //Validate
  //if invalid, return 400
  //else return
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }
  return NextResponse.json({ id: 1, nme: body.name }, { status: 201 }); // because 201 is for created status code in http
}
