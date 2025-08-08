export async function getWeather(){
    const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-17.3895&lon=-66.1568&appid=${apiKey}&units=metric`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}