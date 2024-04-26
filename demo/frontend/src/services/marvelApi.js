import axios from 'axios';
import md5 from 'md5';

const publicKey = '839629b03c13f1a742b3b6b3784a7ddb';
const privateKey = '9ec88227fa70dc003f283b582e5fc443f4681a3a';
const timestamp = 'e08dbaed127654bf3f18fdf7524d13db';

const getHash = () => {
    return md5(timestamp + privateKey + publicKey);

};

const getComics = async () => {
    try {
        const hash = getHash();
        const apiURL = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        const response = await axios.get(apiURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching comics:', error);
        throw error;
    }
};

const getRandomCharacter = async () => {
    try {
        const hash = getHash();
        const apiURL = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=modified&limit=100`;
        const response = await axios.get(apiURL);
        const characters = response.data.data.results;
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        return {data: { results: [randomCharacter] } };
    } catch (error) {
        console.error('Error fetching random character:', error);
        throw error;
    }
};

export { getComics, getRandomCharacter };