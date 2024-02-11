// components/FavoriteStudents.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const FavoriteStudents = () => {
  const { favorites, removeFavorite } = useContext(StudentContext);

  return (
    <div>
      <h1>Favorite Students</h1>
      <ul>
        {favorites.map((student) => (
          <li key={student.id}>
            {student.name}{' '}
            <button onClick={() => removeFavorite(student.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteStudents;
