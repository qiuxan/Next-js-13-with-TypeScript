import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//import prisma client
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  // console.log(prisma);

  return NextResponse.json(
    // create a dummy user arry with id and name
    users
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
