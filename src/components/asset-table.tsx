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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EllipsisVertical, MoveVerticalIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AssetTable = () => {
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
            <TableRow>
              <TableCell className='font-medium'>AAPL</TableCell>
              <TableCell>100</TableCell>
              <TableCell>$120.50</TableCell>
              <TableCell>$135.25</TableCell>
              <TableCell>$13,525.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>MSFT</TableCell>
              <TableCell>50</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>$275.75</TableCell>
              <TableCell>$13,787.50</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>AMZN</TableCell>
              <TableCell>25</TableCell>
              <TableCell>$2,500.00</TableCell>
              <TableCell>$2,750.00</TableCell>
              <TableCell>$68,750.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>TSLA</TableCell>
              <TableCell>10</TableCell>
              <TableCell>$800.00</TableCell>
              <TableCell>$900.00</TableCell>
              <TableCell>$9,000.00</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoveVerticalIcon className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Sell</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AssetTable
