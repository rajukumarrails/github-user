import React from 'react';
import { Card } from 'react-bootstrap';
import UserGrp from '../images/user-grp.png';

function ShowUser({ user }) {
    return (
        <Card className="user-card">
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                    {user.blog || "I love Coding"}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <img className="user-group-img" src={UserGrp} alt="user-grp" />
                <span>{user.followers} Followers</span>
            </Card.Footer>
        </Card>
    )
}

export default ShowUser;
