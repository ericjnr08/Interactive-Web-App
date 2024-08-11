import React from "react"

export default function Destination(props) {
    return (
        <div className="destination">
            <img src={`../images/${props.item.image}`} alt={props.item.title} className="destination-img" />
            <div className="destination-info">
                <h2>{props.item.title}</h2>
                <p>{props.item.location}</p>
                <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
                <p>{props.item.startDate} - {props.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}
