import React, { Component } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import Header from '../../components/Header/Header';
import axios from 'axios';

const title='YoungInnovations Pvt. Ltd.';

class Profile extends Component{
    state={
        profile:[],
        error:false
    }
    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json')
        .then(response=>{
            this.setState({profile:response.data})
        })
        .catch(error=>{
            this.setState({error:true})
        })
    }
    render(){
        const {profile,error}=this.state
        let profileDetails=<p style={{textAlign:'center',marginTop:'90px'}}>
                                Something went wrong!!
                            </p>
        if(!error){
            profileDetails=profile.map(pf=>{
            return <ProfileList 
                        key={pf.firstName} 
                        fName={pf.firstName} 
                        lName={pf.lastName} 
                        photos={pf.photos}
                    />
            })
        };
        return(
            <div>
                <Header title={title}/>
                {profileDetails}
            </div>
        )
    }
}
export default Profile;