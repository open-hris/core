module.exports.normalizePhoneNumber = (phoneNumber, withCountryCode = false) => {
    if (!phoneNumber) {
        return null;
    }

    let normalizePhoneNumber = phoneNumber.toString();

    normalizePhoneNumber = normalizePhoneNumber.replace(/ /g, '');

    const matches = normalizePhoneNumber.matchAll(/([0-9])/gi);

    normalizePhoneNumber = '';

    for (const match of matches) {
        normalizePhoneNumber += match[0];
    }

    if (normalizePhoneNumber.indexOf('0') === 0) {
        normalizePhoneNumber = normalizePhoneNumber.replace('0', '');
    }

    if (withCountryCode && normalizePhoneNumber.indexOf('62') !== 0) {
        normalizePhoneNumber = `62${normalizePhoneNumber}`;
    } else if (
        withCountryCode === false &&
        normalizePhoneNumber.indexOf('62') === 0
    ) {
        normalizePhoneNumber = normalizePhoneNumber.replace('62', '');
    } else if (
        withCountryCode === false &&
        normalizePhoneNumber.indexOf('+62') === 0
    ) {
        normalizePhoneNumber = normalizePhoneNumber.replace('+62', '');
    }

    return normalizePhoneNumber;
};