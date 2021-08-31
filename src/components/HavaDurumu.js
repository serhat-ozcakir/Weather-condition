const HavaDurumu =(props)=>{
    // console.log(props.weather)

    const {weather} = props;


    return (
        <div>
        <h3>{weather?.name}</h3>
        <h4>{weather?.weather.map(data=> data.description).join(",")}</h4>
        <p>{weather?.main.temp} °C</p>
        <p>{new Date(weather?.dt * 1000).toLocaleDateString()} °C</p>
        </div>
    )
}

export default HavaDurumu;