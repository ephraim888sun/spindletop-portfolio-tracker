import { fetchAssetsByOrgId } from '@/app/actions/fetchAssets'
import { fetchOrganizations } from '@/app/actions/fetchOrganizations'
import { NextRequest, NextResponse } from 'next/server'
import yahooFinance from 'yahoo-finance2'

export async function GET(request: NextRequest) {
  const organizations = await fetchOrganizations()

  if (!organizations || organizations?.length === 0) {
  return NextResponse.json(
    { error: 'No organizations found' },
    {
      status: 404,
    }
  )
}
  const organization = organizations[0]

  const assets = await fetchAssetsByOrgId(organization.id)

  try {
    
    const assetsWithFinanceData = await Promise.all(assets.map(async (asset) => {
      const financeData = await yahooFinance.quoteSummary(asset.symbol);
      return { ...asset, financeData };
    }));

    const assetsWithTotalValue = assetsWithFinanceData.map(asset => {
      const totalValue = (asset?.financeData?.price?.regularMarketPrice || 0) * asset.initialShareAmount;
      const totalValueRounded = Math.round(totalValue * 100) / 100;
      return { ...asset, totalValue: totalValueRounded };
    });
    
    console.log('data', assetsWithTotalValue)

    const portfolioValue = assetsWithTotalValue.reduce((total, asset) => total + asset.totalValue, 0);
    console.log('Portfolio Value:', portfolioValue);

    const portfolio = {
      totalValue: portfolioValue,
      totalAssets: assets.length, 
      assets: assetsWithTotalValue.map(asset => ({
        symbol: asset.symbol,
        totalValue: asset.totalValue,
        shortName: asset?.financeData?.price?.shortName
      }))
    }

    return NextResponse.json({ assets: assetsWithTotalValue, portfolio }, {
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



