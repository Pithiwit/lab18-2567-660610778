import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pithiwit Netkhamyuang",
    studentId: "660610778",
  });
};
