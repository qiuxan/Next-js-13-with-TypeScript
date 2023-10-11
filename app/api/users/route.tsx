import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json(
    // create a dummy user arry with id and name
    [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Ian Q" },
    ]
  );
}
