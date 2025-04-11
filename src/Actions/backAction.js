import axios from 'axios';

const register = async function (data, isResend) {
    const payload = { name: data.name, email: data.email, password: data.password1, isResend };
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/register`,
        payload
    );
    return response;
};

const login = async function (data) {
    const payload = { email: data.email, password: data.password1 };
    const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        payload
    );
    return result;
};

const verifyOtp = async function (data) {
    const payload = {
        email: data.email, otp: data.otp
    };
    const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/verifyOtp`,
        payload
    );
    return result;
};

const getLectures = async function (name, email, password) {
    const payload = {
        name, email, password
    };
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/getLectures`);
    return result;
};

export default {
    register,
    login,
    verifyOtp,
    getLectures
}