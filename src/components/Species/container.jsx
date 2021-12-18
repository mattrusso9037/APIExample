import * as React from 'react';
import { SpeciesCard } from './card';
import './container.css';

export function SpeciesContainer({ species = [] }) {

    return (
        <div className={'Container'}>
            {species.map((specie) => {
                return (
                    <SpeciesCard key={specie.uid} id={specie.uid} name={specie.name} />
                )
            })}
        </div>
    )
}