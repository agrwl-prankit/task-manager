import axios from 'axios';
import { BASE_URL } from "../App";
import { useEffect, useState } from 'react';
import styled from "styled-components";

const ButtonTag = styled.button`
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 10px;
`

export default function ShowTaskListComponent({ showList }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const filteredItems = items.filter(item =>
        showList === 'completed' ? item.completed : !item.completed
    );

    const fetchItems = async () => {
        try {
            const response = await axios.get(BASE_URL + 'tasks/');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <div>
            {filteredItems.length > 0 ? (
                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
                            <span>
                                <ButtonTag className="btn btn-secondary mr-2">Edit</ButtonTag>
                                <ButtonTag className="btn btn-danger">Delete</ButtonTag>
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    )
}