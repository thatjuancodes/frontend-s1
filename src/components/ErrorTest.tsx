import { useState } from 'react'
import { Button } from '@chakra-ui/react'

function ErrorTest() {
  const [shouldThrow, setShouldThrow] = useState(false)

  if (shouldThrow) {
    throw new Error('Test error for Error Boundary demonstration')
  }

  return (
    <Button 
      onClick={() => setShouldThrow(true)}
      variant="outline"
      colorScheme="red"
    >
      Test Error Boundary
    </Button>
  )
}

export default ErrorTest