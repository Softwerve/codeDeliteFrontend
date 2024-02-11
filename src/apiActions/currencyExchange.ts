import currencySymbolMap from 'currency-symbol-map';

// Function to fetch exchange rates from Open Exchange Rates API
async function fetchExchangeRates(baseCurrency:string) {
    console.log(baseCurrency)
    const apiKey = '252791a693ce67606093ae4f';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.conversion_rates;
    } catch (error) {
        return 0;
    }
}

// Function to convert amount from one currency to another
export async function convertCurrency(amount:number, fromCurrency:string, toCurrency:string) {
    if(fromCurrency === toCurrency)
    {
        return amount;
    }
    else{
        const exchangeRates = await fetchExchangeRates(fromCurrency);
        const exchangeRate = exchangeRates[toCurrency];
        return amount * exchangeRate;
    }
};
