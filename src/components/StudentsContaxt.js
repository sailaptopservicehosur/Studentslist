// StudentContext.js
import React, { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', isFavorite: false },
    { id: 2, name: 'Jane Smith', isFavorite: false },
    // Add more students as needed
  ]);

  const toggleFavorite = (studentId) => {
    setStudents(students.map(student =>
      student.id === studentId ? { ...student, isFavorite: !student.isFavorite } : student
    ));
  };

  return (
    <StudentContext.Provider value={{ students, toggleFavorite }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext