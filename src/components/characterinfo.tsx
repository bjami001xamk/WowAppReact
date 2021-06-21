import { Dispatch, SetStateAction, FC } from "react";
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Character } from '../types/index';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    maindiv: {
        backgroundColor: 'white',
        height: 800,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderWidth:'10px',
        borderColor:"black",
        borderRadius: 30
    },
  }));

interface Props{
    selectedCharacter: Character,
    setSelectedCharacter : Dispatch<SetStateAction<Character | null>>;
}


const Characterinfo: FC<Props> = ({selectedCharacter, setSelectedCharacter}) => {
    console.log(selectedCharacter)
    const classes = useStyles();
    //const style = { backgroundImage: `url(${selectedCharacter.mediainfo.assets[2].value})`};
    //console.log(style);

    return (
        <>
            <div className={classes.maindiv} /*style={style}*/ >
                HahmoDataa
            </div>
            <Button variant="contained" color="primary" onClick={() => setSelectedCharacter(null)}>Return</Button>
        </>
        
    )
}

export default Characterinfo
