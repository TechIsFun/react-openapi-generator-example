import React from 'react';
import {Pet} from "./data/api/generated";

const PetDetailsComponent: React.FC<{ pet: Pet }> = ({ pet }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: 400 }}>
            <h2>{pet.name}</h2>
            <p><strong>ID:</strong> {pet.id}</p>
            <p><strong>Status:</strong> {pet.status}</p>

            <div>
                <strong>Category:</strong>
                <p>ID: {pet.category?.id}</p>
                <p>Name: {pet.category?.name}</p>
            </div>

            <div>
                <strong>Photo URLs:</strong>
                {pet.photoUrls.length > 0 && pet.photoUrls.some(url => url.trim()) ? (
                    <ul>
                        {pet.photoUrls.map((url, index) => (
                            url.trim() ? (
                                <li key={index}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                                </li>
                            ) : null
                        ))}
                    </ul>
                ) : (
                    <p>No photos available.</p>
                )}
            </div>

            <div>
                <strong>Tags:</strong>
                    <ul>
                        {pet.tags?.map(tag => (
                            <li key={tag.id}>
                                {tag.name || <em>(no tag name)</em>}
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    );
};

export default PetDetailsComponent;