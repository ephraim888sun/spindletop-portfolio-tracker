'use client'

import * as React from 'react'
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {
  organizations: any
}

export default function TeamSwitcher({ className, organizations }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewOrganizationDialog] = React.useState(false)
  const [selectedOrganization, setSelectedOrganization] = React.useState<any>(
    organizations[0]
  )

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewOrganizationDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            aria-label='Select a team'
            className={cn('w-max min-w-[200px] justify-between', className)}
          >

            <Avatar className='mr-2 h-5 w-5'>
              <AvatarImage
                src={`${selectedOrganization.avatar && selectedOrganization.avatar}` }
                alt={selectedOrganization.label}
                className='grayscale'
              />
              <AvatarFallback>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              </AvatarFallback>
            </Avatar>            
            {selectedOrganization.name}
            <CaretSortIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-max min-w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search team...' />
            <CommandList>
              <CommandEmpty>No organization found.</CommandEmpty>
              {organizations.map((organization: any) => (
                <CommandGroup key={organization.tag} heading={"Organizations"}>
                   <CommandItem
                      key={organization.tag}
                      onSelect={() => {
                        setSelectedOrganization(organization)
                        setOpen(false)
                      }}
                      className='text-sm'
                    >
                      <Avatar className='mr-2 h-5 w-5'>
                        <AvatarImage
                          src={`${selectedOrganization.avatar && selectedOrganization.avatar}` }
                          alt={selectedOrganization.name}
                          className='grayscale'
                        />
                        <AvatarFallback>
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                        </AvatarFallback>
                      </Avatar>
                      {organization.name}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          selectedOrganization.tag === organization.tag
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewOrganizationDialog(true)
                    }}
                  >
                    <PlusCircledIcon className='mr-2 h-5 w-5' />
                    Create Team
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create organization</DialogTitle>
          <DialogDescription>
            Add a new organization to manage assets and holdings.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className='space-y-4 py-2 pb-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Organization name</Label>
              <Input id='name' placeholder='Acme Inc.' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='plan'>Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a plan' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='free'>
                    <span className='font-medium'>Free</span> -{' '}
                    <span className='text-muted-foreground'>
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value='pro'>
                    <span className='font-medium'>Pro</span> -{' '}
                    <span className='text-muted-foreground'>
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant='outline' onClick={() => setShowNewOrganizationDialog(false)}>
            Cancel
          </Button>
          <Button type='submit' disabled>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
