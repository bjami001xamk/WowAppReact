import React from 'react'
import { Card } from '@material-ui/core'

function Charactercard({character}) {
    return (
        <Card>
            <p>{character.name}</p>
            <p>{character.level}</p>
        </Card>
    )
}

export default Charactercard
