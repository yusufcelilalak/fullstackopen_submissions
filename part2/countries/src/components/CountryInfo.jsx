const CountryInfo = ({country}) => {
    return(    
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            <ul>
            {
                Object.keys(country.languages).map((langCode)=>{
                return <li key={langCode}>{country.languages[langCode]}</li>
                })
            }
            </ul>
            <div className='flag'>
            <img src={country.flags.png} alt={country.flags.alt}/>
            </div>
        </div>
    );
}

export default CountryInfo;