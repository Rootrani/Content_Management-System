import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentPage = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            const res = await axios.get('/api/content');
            setContent(res.data);
        };

        fetchContent();
    }, []);

    return (
        <div>
            <h1>Content Page</h1>
            {content.map((item) => (
                <div key={item._id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default ContentPage;
