import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_WEBAPP_URL!;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: String(name ?? ""),
        email: String(email ?? ""),
        phone: String(phone ?? ""),
        message: String(message ?? ""),
      }),
    });

    const result = await res.json();

    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { error: "Sheet save failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
