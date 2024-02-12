import React from "react";
import {useSelector} from 'react-redux';
import {selectCurrentUser} from "../../store/user/UserSelector";

const Welcome = () => {
    const currentUser = useSelector(selectCurrentUser);
    const displayName = currentUser?.displayName;
    return (
        <div>
            {displayName && (
                <span className="text-4xl text-white cart-title flex items-center justify-center">
                    {`Welcome, ${displayName}`}
                </span>
            )}
        </div>
    )
}

export default Welcome;