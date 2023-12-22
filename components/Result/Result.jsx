import React from 'react'
import { FlatList } from 'react-native'
import TodoListContext from '../../TodoListContext'
import Item from '../Item/Item'
const Result = () => {
    const todoListContext = React.useContext(TodoListContext)
    return (
        <FlatList
            //utilisation du composant FlatList pour afficher une liste d'éléments 
            data={todoListContext.list}
            renderItem={({ item, index }) => <Item item={item} index={index} />}
            // renderItem est utilisé pour fournir un composant pour chaque élément de la liste
            // keyExtractor est utilisé pour fournir une clé unique pour chaque élément de la liste
            keyExtractor={item => item}
        />
    )
}
export default Result