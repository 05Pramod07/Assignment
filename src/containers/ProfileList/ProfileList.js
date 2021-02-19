import React, { Component } from 'react';
import './ProfileList.css';
import DefaultImage from '../../assets/Silhouette.png'

const priority={
    googlePriority:1,
    linkedinPriority:2,
    facebookPriority:3,
    twitterPriority:4,
    office365Priority:5
}

class ProfileList extends Component{       
    render(){   
        const {photos}=this.props
        let profilePhotos=[...photos]
        const sortedData=profilePhotos.sort((a,b)=>
        (priority[a.source+'Priority']-priority[b.source+'Priority'])<0?-1:1)
        const photoDetails= sortedData.map(img=>{
        return (
        <div  key={img.url}>
            {img.source?
            (<h5 style={{ textTransform: 'uppercase',color:'mediumseagreen'}}>
                {img.source}
            </h5>):
            (<h5 style={{color:'red'}}>
                NAME NOT FOUND!
            </h5>)}        
            <img 
                src={img.url} 
                alt='Img'
                width='226' 
                height='200'
                onError={(e)=>{
                    e.target.src=DefaultImage
                }}
            />
        </div>
    )
})
    return(
        <div >
            <h2 className='FullName'>
                {this.props.fName} {this.props.lName}
            </h2>
            <div className='ProfileList'>
                 {photoDetails}
            </div>
        </div>
    )}
}
export default ProfileList;