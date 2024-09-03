import { NextRequest, NextResponse } from 'next/server'
import yahooFinance from 'yahoo-finance2'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const ticker = searchParams.get("ticker");

  if (!ticker) {
    return new NextResponse("Ticker Symbol not found", { status: 404 });
  }

  try {
    const result = await yahooFinance.quoteSummary(ticker)
    console.log('data', result)

    return NextResponse.json(result, {
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