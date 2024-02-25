import { Heading, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Charges = () => {
  return (
    <Stack p={10} spacing={5}>
        <Stack width={'60%'} margin={'auto'} justifyContent={'center'} alignItems={'center'}>
            <Text color={'gray'} fontStyle={'italic'}>{"Welcome to CodeDelite! We believe in transparency and providing clear guidelines for our valued authors. Below, you'll find detailed information about our pricing structure and charges."}</Text>
        </Stack>
        <Stack p={10} spacing={5}>
            <Heading>Pricing Structure</Heading>
            <UnorderedList spacing={5}>
                <ListItem>
                    <b>Free Templates: </b>{"Explore a selection of free templates available to all authors, perfect for showcasing your skills and attracting potential buyers."}
                </ListItem>
                <ListItem>
                    <b>Paid Templates: </b>{"Set your own price for paid templates and earn revenue for each successful sale. We operate on a revenue-sharing model, ensuring fair compensation for your hard work."}
                </ListItem>
            </UnorderedList>
        </Stack>
        <Stack p={10} spacing={5}>
            <Heading>Charges</Heading>
            <UnorderedList spacing={5}>
                <ListItem>
                    <b>Platform Fee: </b>{"We charge a nominal platform fee of 20% for each successful paid sale made through CodeDelite. This fee covers the operational costs of maintaining the platform and providing support to our authors."}
                </ListItem>
                <ListItem>
                    <b>Payment Gateway Charges: </b>{"Please note that payment gateway charges may apply, depending on the payment method chosen by the buyer. These charges are deducted from the total sale amount before the revenue is disbursed to you"}
                </ListItem>
                <ListItem>
                    <b>Payout Charges: </b>
                    <OrderedList spacing={5}>
                        <ListItem>
                            <b>Standard Fee:</b> {" There is a standard payout charge of 0.25% applied to all transactions. This fee covers the processing and transfer of funds from your account to your designated bank account"}
                        </ListItem> 
                        <ListItem>
                            <b>Currency Conversion Fee:</b> {" There is a standard payout charge of 0.25% applied to all transactions. This fee covers the processing and transfer of funds from your account to your designated bank account"}
                        </ListItem>
                    </OrderedList>
                </ListItem>
            </UnorderedList>
        </Stack>
        <Stack p={10} spacing={5}>
            <Heading>Payment Process</Heading>
            <UnorderedList spacing={5}>
                <ListItem>
                    <b>Payouts: </b>{" Payouts for successful sales are processed on a regular basis, typically within 7-10 business days. You can choose your preferred payout method from the options available in your account settings."}
                </ListItem>
                <ListItem>
                    <b>Minimum Payout Threshold: </b>{"Please ensure that your account balance meets the minimum payout threshold before requesting a payout. This threshold helps streamline our payment processing and reduce transaction fees."}
                </ListItem>
            </UnorderedList>
        </Stack>
    </Stack>
  )
}

export default Charges