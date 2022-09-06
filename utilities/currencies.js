const idrCurrencies = async (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

module.exports = {
    idrCurrencies
}
