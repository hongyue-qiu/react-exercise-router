import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return (
            <div className="about">
                <p>Company:ThoughtWorks Local</p>
                <p>Location:Xi'an</p>
                <br/>
                <p>For more information,please</p>
                <p>view our &nbsp;
                    <Link to="/" class="webisite">website</Link>
                </p>
            </div>
        );
    }
}
export default About;