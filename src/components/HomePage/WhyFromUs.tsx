import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const WhyFromUs = () => {
  const cards = [{},{},{},{},{},{}];
  return (
    <Stack p={'10%'} spacing={5}>
      <Heading textAlign={'center'}>Unlock the Value - Reasons to Choose Our Templates</Heading>
      <Grid templateRows={'repeat(2,200px)'} templateColumns={'repeat(3,1fr)'} gap={15}>
        {cards.map((card, index) => (
          <GridItem borderRadius={10} key={index} bg={'yellow'} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default WhyFromUs;
