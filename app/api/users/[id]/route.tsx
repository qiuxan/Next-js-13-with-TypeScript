import { NextRequest, NextResponse } from "next/server";

//export a next route function
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      { error: "id must be less than 10" },
      { status: 404 }
    );
  }
  return NextResponse.json({ id: 1, name: "John Doe" });
}
