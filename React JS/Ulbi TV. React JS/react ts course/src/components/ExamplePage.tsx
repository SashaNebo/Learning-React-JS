import React from 'react'

import EventsExample from './EventsExample'
import Card from './Card'
import { CardVariant } from './Card'

const ExamplePage: React.FC = () => {
  return (
    <div>
      <EventsExample />
      <Card
        onClick={() => console.log('click')}
        variant={CardVariant.outlined}
        width='500px'
        height='500px'>
        <button>CLICK</button>
      </Card>
    </div>
  )
}

export default ExamplePage
