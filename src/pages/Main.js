import React from 'react'

// import ReactJson from 'react-json-view'
 

export const Main = (props) => {
    const json = {
        "location": props.location,
        "minCustomers": props.minCustPerHr,
        'maxCustomers': props.maxCustPerHr,
        'avgCookies': props.avgCookie,
    }
    const data = JSON.stringify(json)
    return (
      
            <form className="bg-green-200">
                <fieldset>
                <label >
                    Create Cookie Stand
                </label>
                    <div>
                        
                         
                        <div>
                            <div >
                                <label >location</label>
                                <input type="text" name="location"  />
                            </div>
                        </div>
                        <div >
                            <div >
                                <div>
                                    <label >Minimum Customers per Hour</label>
                                    <input type="number" />
                                </div>
                                <div >
                                    <label >Maximum Customers per Hour</label>
                                    <input type="number"  />
                                </div>
                                <div >
                                    <label >Average Cookies per Sale</label>
                                    <input type="number"  />
                                </div>
                                <button className="bg-green-600 w-1/4">Create</button>
                            </div>
                            <p>Report Table Coming Soon...</p>
                            <p>{data}</p>
                        </div>
                    </div>
                </fieldset>
            </form>
            
      
    )
}