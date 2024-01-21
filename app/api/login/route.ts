import jwt, { Secret } from "jsonwebtoken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request, res: Response) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const jwtSecret: Secret | undefined = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error(
        "JWT secret is not defined in the environment variables."
      );
    }

    const token = jwt.sign({ email }, jwtSecret, {
      expiresIn: "15m",
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 587,
      secure: false,
      auth: {
        user: "username",
        pass: "password",
      },
    });

    const magicLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/verify?token=${token}`;
    
    await transporter.sendMail({
      from: '"Siriphong" <s6530613022@phuket.psu.ac.th>',
      to: email,
      subject: "Your Magic Link",
      text: `Click on this link to log in: ${magicLink}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in POST request:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
