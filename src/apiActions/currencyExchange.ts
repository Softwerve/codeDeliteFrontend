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
        return null;
    }
}

// Function to convert amount from one currency to another
export async function convertCurrency(amount:number, fromCurrency:string, toCurrency:string) {
    const exchangeRates = await fetchExchangeRates(fromCurrency);
    if (!exchangeRates) {
        return null;
    }

    const exchangeRate = exchangeRates[toCurrency];
    if (!exchangeRate) {
        return null;
    }
    console.log(amount*exchangeRate);
    return amount * exchangeRate;
};


// Function to get currency symbol dynamically
export function getCurrencySymbol(currencyCode: string) {
    const symbolMap = currencySymbolMap(currencyCode);
    return symbolMap || currencyCode;
}

