import * as React from 'react';
import './card.css';

export function SpeciesCard({id, name}) {
    return (
        <section className={'Card'}>
            <div>{id}</div>
            <div>{name}</div>
        </section>
    )
}