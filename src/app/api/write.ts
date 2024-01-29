import { NextResponse } from "next/server";

export const write = async () => {
  return NextResponse.json({
    message: "write",
  });
};
