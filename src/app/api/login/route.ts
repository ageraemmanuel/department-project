import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    username: 'student',
    password: 'Student@1234'
  },
  {
    id: 2,
    username: 'admin',
    password: 'Admin@1234'
  },
]

export async function POST(req: Request) {
  const { userName, password } = await req.json();

  if (!userName || !password) {
    return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 })
  }

  const user = users.find(user => user.username === userName)
  console.log(user)

  if (!user || user.password !== password) {
    console.log("not user or incorrect password");

    return NextResponse.json({ success: false, message: 'Invalid username or password!' }, { status: 400 })
  }

  return NextResponse.json({ success: true, username: user.username, message: 'login successful' }, { status: 200 })
}