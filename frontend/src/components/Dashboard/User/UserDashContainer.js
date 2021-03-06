import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import UserDashUI from './1UserHome/UserDashUI';
import UserDashHeader from './0CommonComponents/UserDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import MyJobApplications from './MyJobApplications';
import PaymentGateway from './4PaymentGateway/PaymentGateway';

const UserDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <UserDashHeader logout={props.history} />
            Hello {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/userDashboard" component={UserDashUI} />
            <Route exact path="/userDashboard/myApplications" component={MyJobApplications} />

            <Route exact path="/userDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/userDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/userDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/userDashboard/myOrders" component={MyJobApplications} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default UserDashContainer
