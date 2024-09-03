'use client'
import useSWR from 'swr'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/components/date-range-picker'
import { Overview } from '@/components/overview'
import { RecentTransactions } from '@/components/recent-transactions'
import AssetTable from '@/components/asset-table'
import Header from '@/components/header'
import Nav from '@/components/nav'
import { fetcher } from '@/lib/fetcher'
import { TryAgain } from '@/components/try-again'
import { LoadingScreen } from '@/components/loading-screen'


export default function HomePage() {
  const { data: assets, error, isLoading } = useSWR('/api/asset/holdings', fetcher)

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (error) {
    return (
      <TryAgain />
    );
  }

  console.log('assets', assets)

  return (
    <>
      <div className='flex-col flex'>
        <Nav />
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
            <div className='flex items-center space-x-2'>
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value='overview' className='space-y-4'>
              <Header />
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                <Overview />
                <RecentTransactions />
              </div>
              <div className='grid gap-4 '>
                <AssetTable />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
