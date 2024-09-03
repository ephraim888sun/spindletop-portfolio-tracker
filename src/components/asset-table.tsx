'use client'
import React from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EllipsisVertical, MoveVerticalIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useHoldings } from '@/hooks/useHoldings'
import { LoadingScreen } from './loading-screen'
import { TryAgain } from './try-again'
import { formatPrice } from '@/lib/format'

const AssetTable = () => {

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

  return (
    <Card className='col-span-4'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div>
          <CardTitle>Current Holdings</CardTitle>
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
      <CardContent className='pl-2'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticker</TableHead>
              <TableHead>Shares</TableHead>
              <TableHead>Avg Cost</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Total Value</TableHead>
              <TableHead>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets && assets?.map((asset: any) => {
              return <TableRow key={asset.id}>
                <TableCell className='font-medium'>{asset.symbol}</TableCell>
              <TableCell>{asset?.initialShareAmount}</TableCell>
              <TableCell>{formatPrice(asset?.initialPrice)}</TableCell>
              <TableCell>{formatPrice(asset?.financeData?.price?.regularMarketPrice)}</TableCell>
              <TableCell>{formatPrice(asset?.totalValue)}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>See More</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AssetTable
