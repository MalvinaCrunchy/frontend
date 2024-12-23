// const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const baseUrl = 'https://api.telegram.org/bot7529246452:AAFyWiSO_gZNvVZqmM23F1HsM6efRorSH3A/';

export const sendMessage = async (message) => {
    try {
        // Adjust the URL to include parse_mode=HTML
        const url = `${baseUrl}sendMessage?chat_id=-1002263364594&text=${encodeURIComponent(message)}&parse_mode=HTML`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('response', data);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
