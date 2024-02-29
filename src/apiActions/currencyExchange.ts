const apiUrl = process.env.NEXT_PUBLIC_CURRENCY_EXCHANGE_URL ;

// Function to convert amount from inr currency to another currency
export function convertCurrencyFromINR(amount:number, toCurrency:string) {

    if(toCurrency==="INR")
    {
        return amount
    }
    else{
        fetch(`${apiUrl}/frominr?countrycode=${toCurrency}`).then((response)=> response.json())
        .then((data)=>{
            return data.rate*amount;
        }).catch((error)=>{
            console.error(error);
            return 0;
        })
    }
   
};


// Function to convert amount from any currency to inr currency
export function convertCurrencyToINR(amount:number, fromCurrency:string) {
    if(fromCurrency==="INR")
    {
        return amount
    }
    else{
        fetch(`${apiUrl}/toinr?countrycode=${fromCurrency}`).then((response)=> response.json())
        .then((data)=>{
            return data.rate*amount;
        }).catch((error)=>{
            console.error(error);
            return 0;
        })
    }
   
};
