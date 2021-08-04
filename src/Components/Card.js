import React, {useState, useEffect} from 'react';
import { api } from '../Services/api';

export function Card ({pokemon}) {
	const [showDetails, setShowDetails] = useState(false);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		api.get(`/${pokemon.url.split('/')[6]}/`).then( detail => {
			setDetails(detail.data);
		})
	}, [pokemon.url]);

	const frontCard = (
			<>
					<img alt={pokemon.name} src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}/>
					<h2>{pokemon.name}</h2>
			</>
	)
	
	const backCard = (
			<>
				<div className="backCard-header">
					<h3>{details.name}</h3>
					<span>#{details.id}</span>
				</div>
				<div className="backCard-content">
					<div>Height<span>{(details.height / 10).toFixed(details.height % 10 === 0 ? 0 : 1)} m</span></div>
					<div>Weight<span>{(details.weight / 10).toFixed(details.weight % 10 === 0 ? 0 : 1)} kg</span></div>
					<div>Types
						{
						details.types !== undefined
							? <>{details.types.map(type => {
								return <span key={type.type.name} className="types">{type.type.name}</span>;
							})}</>
							: <span>Loading...</span>
						}
					</div>
					<div>Abilities
						{
						details.abilities !== undefined
							? <>{details.abilities.map(ability => {
								return ability.is_hidden ? false : <span key={ability.ability.name} className="abilities">{ability.ability.name}</span>;
							})}</>
							: <span>Loading...</span>
						}
					</div>
				</div>
			</>
	)
	
	return <div onClick={() => setShowDetails(!showDetails)} className={`card detail-${showDetails}`}>{showDetails ? backCard : frontCard}</div>
};
