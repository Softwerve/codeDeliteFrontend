const apiUrl = process.env.NEXT_PUBLIC_CURRENCY_EXCHANGE_URI;

// Function to convert amount from INR currency to another currency
export async function convertCurrencyFromINR(amount:number, toCurrency:string) {
    if(toCurrency === "INR")
    {
        return amount;
    }
    else{
        try {
            const response = await fetch(`${apiUrl}/frominr?countrycode=${toCurrency}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Conversion rate:", data.rate);
            return data.rate * amount;
        } catch (error) {
            console.error("Error converting currency from INR:", error);
            return 0;
        }
    }
};

// Function to convert amount from any currency to INR currency
export async function convertCurrencyToINR(amount:number, fromCurrency:string) {
    if(fromCurrency === "INR")
    {
        return amount;
    }
    else{
        try {
            const response = await fetch(`${apiUrl}/toinr?countrycode=${fromCurrency}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Conversion rate:", data.rate);
            return data.rate * amount;
        } catch (error) {
            console.error("Error converting currency to INR:", error);
            return 0;
        }
    }
};
