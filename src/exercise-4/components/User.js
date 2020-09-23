import React from 'react';
import NotMatch from "./NotMatch";

const User = (props) => {
    const id = props.match.params.user;

    const reg = /^[0-9]*$/g;

    if (reg.test(id)) {
        return <div>User profile page.</div>;
    }

    return <NotMatch/>;
};

export default User;