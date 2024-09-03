import prisma from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  try {
    const organizations = await prisma.organization.findMany()
    console.log('organizations', organizations)

    return NextResponse.json(organizations, {
      status: 200,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
      }
    )
  }
}