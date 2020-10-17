import React from 'react';
import PropTypes from 'prop-types';



const Profil = props => {
    console.log(props)
    return (
        <>
            <h1 stye={{color:"#FF7F50"}}><b>FullName: </b>{props.fullName}</h1>
            <h1 stye={{color: "#DC143C"}}><b>Bio: </b>{props.bio}</h1>
            <h1 stye={{color: "#7FFF00"}}><b>Profession: </b>{props.profession}</h1>
            
            <button  onClick={()=> props.handleName(props.fullName)} >Click</button>
        <div>
            <img stye={{width:300, height:250}} src={props.children} alt={props.alt} style={props.style}/>
            
        </div>        
        </>
    )
};

Profil.defaultProps = {
    fullName: 'Blackburn' ,
    bio: 'Call of Duty',
    profession: 'Soldiers',
}

Profil.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};

export default Profil