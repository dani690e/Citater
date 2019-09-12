import React from 'react'

const Citater = ({citater, deleteCitat}) => {
    const citatList = citater.length ? (
        citater.map(citat => {
            return (
                <div className="citat" key={citat.id} onClick={() => {deleteCitat(citat.id)}}>
                    <h4 className="center">{citat.title}</h4>
                    <p className="center">{citat.citatText}</p>
                    <p className="center italic">{citat.forfatter}</p>
                </div>
            )
        })
    ) : (
        <p className="center red-text">We have no quotes to show</p>
    )
    return (
        <div className="Citater collection">
            {citatList}
        </div>
    )
}

export default Citater
