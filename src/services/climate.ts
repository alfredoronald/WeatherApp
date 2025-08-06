export async function getClimate() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-17.3895&lon=-66.1568&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
 
    // const first = data.list[0];
    // return {
    //   temperature: first.main.temp,
    //   description: first.weather[0].description,
    //   icon: first.weather[0].icon
    // };
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    return daily;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    return null;
  }
}