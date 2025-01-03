import { Mail } from 'lucide-react';

import { Card } from './card'
import { Separator } from './separator'




export const NewContact = ()  => {

  
  return (
    
      <Card className="mt-10 p-10 w-full">
      <div className="space-y-1 ">

        <div className="text-8xl font-bold w-[400px]">Lets Connect</div>
        <Separator/>
        <div className='flex items-center justify-start gap-4'>
          <Mail className='font-bold'/>
            <h1 className='text-4xl'>
              Email
            </h1>

        </div>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    
    </Card>
  )
}




