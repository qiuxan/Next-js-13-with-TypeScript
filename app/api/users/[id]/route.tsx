import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

//export a next route function
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

// create a put function
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //to do:
  //1. validate the request body
  //2, if invalid, return a 400 response
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //3, fetch the user from the database with the given id
  //4, if the user doesn't exist, return a 404 response

  const user = prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    //mocking the database
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  //5, update the user with the request body
  //6, return a 200 response with the updated user

  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

// create a delete function
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //to do:
  //1, fetch the user from the database with the given id
  //2, if the user doesn't exist, return a 404 response
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    //mocking the database
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  //3, delete the user
  //4, return a 200 response with the deleted user
  await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({});
}
