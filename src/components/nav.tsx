import React from 'react'
import { MainNav } from '@/components/main-nav'
import { Search } from '@/components/search'
import TeamSwitcher from '@/components/team-switcher'
import { UserNav } from '@/components/user-nav'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { TryAgain } from './try-again'
import { LoadingScreen } from './loading-screen'

const Nav = () => {

  const { data: organizations, error, isLoading } = useSWR('/api/organization', fetcher)

 
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

   if (!organizations) {
    return
  }

  return (
    <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
        <TeamSwitcher organizations={organizations} />
        <MainNav className='mx-6' />
        <div className='ml-auto flex items-center space-x-4'>
            <Search />
            <UserNav />
        </div>
        </div>
    </div>
  )
}

export default Nav