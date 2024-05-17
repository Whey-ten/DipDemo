import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TreeView = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const renderTree = (node) => (
        <li key={node._id}>
            {node.name}
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map(child => renderTree(child))}
                </ul>
            )}
        </li>
    );

    return (
        <div>
            <h1>User Data Tree</h1>
            <ul>
                {users.map(user => renderTree(user))}
            </ul>
        </div>
    );
};

export default TreeView;
