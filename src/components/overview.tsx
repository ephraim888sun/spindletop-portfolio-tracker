'use client'

import { EllipsisVertical, TrendingUp } from 'lucide-react'
import { Pie, PieChart } from 'recharts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Button } from '@/components/ui/button'
import { useHoldings } from '@/hooks/useHoldings'
import { LoadingScreen } from './loading-screen'
import { TryAgain } from './try-again'
import { formatPrice, getRandomColor } from '@/lib/format'

export const description = 'A pie chart with a label'



const chartConfig = {
  value: {
    label: 'value',
  },
  chrome: {
    label: 'Exxon Mobile Corp',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Chevron Corp',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Valero Energy',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Epsilon Energy',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Devon Energy',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function Overview() {

   const { assets, portfolio, isError, isLoading } = useHoldings()

    if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (isError) {
    return (
      <TryAgain />
    );
  }

  const chartData = portfolio.assets.map((asset: any) => ({
    asset: asset.symbol,
    value: asset.totalValue,
    fill: getRandomColor(),
  }));

  console.log('asset', assets)
  console.log('portfolio', portfolio)

  return (
    <Card className='col-span-4'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div>
          <CardTitle>Overview</CardTitle>
          <CardDescription>September 2024</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup='true' size='icon' variant='ghost'>
              <EllipsisVertical className='h-4 w-4' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>See more</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[500px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey='value' label nameKey='asset' />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
