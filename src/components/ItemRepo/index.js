import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <button><a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a></button>
        <button className="remover"><a href="#"  rel="noreferrer" >Remover</a></button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
