import { fetchOrganizations } from '@/app/actions/fetchOrganizations';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  try {
    const organizations = await fetchOrganizations()

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