import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()
    console.log(process.env.EMAIL_USER,process.env.EMAIL_PASSWORD)

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // Use TLS
        auth: {
          user: process.env.EMAIL_USER, // Your Outlook email address
          pass: process.env.EMAIL_PASSWORD,    // Your email password or app-specific password
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false, // Allow self-signed certificates
        },
    })

    const mailOptions = { 
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    )
  }
}
