import React from 'react'

export const Main = () => {
    return (
      
            <form class="bg-green-200">
                <fieldset>
                <label >
                    Create Cookie Stand
                </label>
                    <div>
                        <div>
                            <div >
                                <label >location</label>
                                <input type="text" />
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
                        </div>
                    </div>
                </fieldset>
            </form>
            
      
    )
}