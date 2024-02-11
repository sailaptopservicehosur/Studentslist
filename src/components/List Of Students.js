// ListOfStudents.js
import React, { useState } from 'react';

function ListOfStudents() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Dhivya', isFavorite: false },
    { id: 2, name: 'Sheerin', isFavorite: false },
    { id: 3, name: 'Kaviya', isFavorite: false },
    { id: 4, name: 'Jency', isFavorite: false }
  ]);

  const handleAddToFavorites = (studentId) => {
    setStudents(students.map(student =>
      student.id === studentId ? { ...student, isFavorite: !student.isFavorite } : student
    ));
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className="bg-pink-300 p-6 text-2xl">List of Students</h1>
      <div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
            <button className="bg-black text-white border rounded-md p-1" onClick={() => handleAddToFavorites(student.id)}>
              {student.isFavorite ? 'Remove' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ListOfStudents;
