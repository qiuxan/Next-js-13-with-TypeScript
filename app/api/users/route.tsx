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

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user)
    return NextResponse.json({ error: "user already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 }); // because 201 is for created status code in http
}
