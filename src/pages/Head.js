import React from 'react'

export const Head = (props) => {
    return (
        <head>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            <title>{props.title}</title>
            {/* <title>Cookie Stand Admin</title> */}
        </head>
    )
}
