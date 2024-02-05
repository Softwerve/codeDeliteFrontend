import { Grid, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const ComponentCategoryPage = ({category}:{category:string}) => {
  return (
    <Stack p={10}>
        <Heading>{category}</Heading>
        <Grid>
            
        </Grid>
    </Stack>
  )
}

export default ComponentCategoryPage