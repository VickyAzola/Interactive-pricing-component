import { React, useState} from 'react';
import './TheForm.css'

function TheForm() {

    const [state, setState] = useState({
        pageViews: "100K",
        prices: "16.00",
        withDiscount: '12.00',
    })
    const [value, setValue] = useState(2)
    const [toggle, setToggle] = useState(false)

    const data = [
        {id: 0, pageViews: '10K', prices: '8.00', withDiscount: '6.00' },
        {id: 1, pageViews: '50K', prices: '12.00', withDiscount: '9.00' },
        {id: 2, pageViews: '100K', prices: '16.00', withDiscount: '12.00' },
        {id: 3, pageViews: '500K', prices: '24.00', withDiscount: '19.00' },
        {id: 4, pageViews: '1M', prices: '36.00', withDiscount: '27.00' },
    ]
    
    const MAX = 4;

    /*change input range */
    function getBackgroundSize() {
        return {
            backgroundSize: `${(value * 100) / MAX}% 100%`,
        };
    };

    function handleToggle() {
        setToggle(!toggle)
    }
    
    function handleChange(event) {
        const newValue = event.target.value
        setValue(newValue)
        let orderedData = data.find((item) => {
            if(item.id == newValue) {
                return item
            }
        })
        setState(orderedData)
    }
    
    return (
    <>
    <form>
        <div className='range'>

            <div className='pages-and-price-desktop'>
                <label htmlFor="rangeTrack">
                    <span className='pageViews'>{state.pageViews} </span>
                    Pageviews
                </label>
                <div className='priceDesktop'>
                    <p className='price-group'>
                        <span className='price'>
                            ${toggle ? state.withDiscount : state.prices} </span>
                            / month
                    </p>
                </div>
            </div>

            <input 
                type="range"
                onChange={handleChange}
                style={getBackgroundSize()}
                value={value}
                id="rangeTrack" 
                min="0"
                max={MAX}
                aria-label="Move to change pageview cuantity and see the correponding price" 
            />

            <div className='priceMobile'>
                <p className='price-group'>
                    <span className='price'>
                        ${toggle ? state.withDiscount : state.prices} </span>
                    / month
                </p>
            </div>

        </div>

        <div className="toggle">
            <p>Monthly Billing</p>
            <label htmlFor='toggle' className="switch">
                <input 
                    type="checkbox"
                    onChange={handleToggle}
                    checked={toggle}
                    value={toggle}
                    name="toggle"
                    id="toggle" 
                    aria-label="Toggle to show Yearly pricing and hide monthly pricing" />
                <span className="slider round"></span>
            </label>
            <p>Yearly Billing <span className='discount'>-25%</span></p>
        </div>
    </form>
    </>
    )
}

export default TheForm
