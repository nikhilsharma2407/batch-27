const speakeasy = require("speakeasy");
const QRCode = require('qrcode');

const generateQRCode = async () => {
    const { base32: secret, otpauth_url } = speakeasy.generateSecret({ name: 'GeeksForGeeks' });
    const qrcode = await QRCode.toDataURL(otpauth_url);
    console.log({secret});
    return {secret,qrcode}
};
const verifyOTP = (otp,secret) => {
    return speakeasy.totp.verify({
        secret,
        encoding: 'base32',
        token: otp
    });
}

module.exports = {generateQRCode,verifyOTP}