import { NextRequest, NextResponse } from 'next/server'
import yahooFinance from 'yahoo-finance2'

export async function GET(request: NextRequest) {
  const symbols = [
    'XOM', // ExxonMobil
    'CVX', // Chevron
    'COP', // ConocoPhillips
    'TTE', // TotalEnergies
    'BP', // BP
    'SHEL', // Shell
    'XLE', // Energy Select Sector SPDR Fund
    'VDE', // Vanguard Energy ETF
    'NEE', // NextEra Energy
    'ENPH', // Enphase Energy
    'FSLR', // First Solar
    'PLUG', // Plug Power
    'BEP', // Brookfield Renewable Partners
    'SLB', // Schlumberger
    'HAL', // Halliburton
    'BKR', // Baker Hughes
    'BTU', // Peabody Energy
    'ARCH', // Arch Resources
  ]

  try {
    // Series: perform one request at a time, one after the other
    let data = []
    for (let symbol of symbols)
      data.push(await yahooFinance.quoteSummary(symbol))

    // Parallel: perform all requests simultaneously (within concurrency limit)
    const result = (await Promise.all(
      symbols.map((symbol) => yahooFinance.quoteSummary(symbol))
    )) as any

    console.log('data', result)

    // const quote = await yahooFinance.quote('AAPL')

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