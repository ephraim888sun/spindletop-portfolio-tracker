import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { EllipsisVertical } from 'lucide-react'

export function RecentTransactions() {
  return (
    <Card className='col-span-4 lg:col-span-3'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
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
      <CardContent>
        <div className='space-y-8'>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src='/avatars/01.png' alt='Avatar' />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Bought 300 shares
              </p>
              <p className='text-sm text-muted-foreground'>Devon Energy</p>
            </div>
            <div className='ml-auto font-medium'>+$3,000.00</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
              <AvatarImage src='/avatars/02.png' alt='Avatar' />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Sold 200 shares
              </p>
              <p className='text-sm text-muted-foreground'>Apple Inc.</p>
            </div>
            <div className='ml-auto font-medium'>+$250.00</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src='/avatars/03.png' alt='Avatar' />
              <AvatarFallback>Bought 100 shares</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Bought 150 shares
              </p>
              <p className='text-sm text-muted-foreground'>Marathon Oil</p>
            </div>
            <div className='ml-auto font-medium'>+$299.00</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src='/avatars/04.png' alt='Avatar' />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Bought 800 shares
              </p>
              <p className='text-sm text-muted-foreground'>ConocoPhillips</p>
            </div>
            <div className='ml-auto font-medium'>+$9000.00</div>
          </div>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src='/avatars/05.png' alt='Avatar' />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>
                Sold 300 shares
              </p>
              <p className='text-sm text-muted-foreground'>Chevron Corp</p>
            </div>
            <div className='ml-auto font-medium'>+$5,000.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
