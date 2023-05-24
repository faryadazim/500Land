"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from './ui/dialog'

const SweeAlert3 = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent className='bg-gray-500'>
                    <DialogHeader>
                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SweeAlert3