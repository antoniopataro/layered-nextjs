import { NextResponse } from "next/server";

export const read = async () => {
  return NextResponse.json({
    message: "read",
  });
};
