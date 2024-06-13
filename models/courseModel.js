const db = require('../config/db');

const getAllCourses = async () => {
    const [rows] = await db.query('SELECT * FROM Courses');
    return rows;
};

const getCourseById = async (courseId) => {
    const [rows] = await db.query('SELECT * FROM Courses WHERE course_id = ?', [courseId]);
    return rows[0];
};

const createCourse = async (title, description, teacherId) => {
    const [result] = await db.query('INSERT INTO Courses (title, description, teacher_id) VALUES (?, ?, ?)', [title, description, teacherId]);
    return result.insertId;
};

const updateCourse = async (courseId, title, description) => {
    await db.query('UPDATE Courses SET title = ?, description = ? WHERE course_id = ?', [title, description, courseId]);
};

const deleteCourse = async (courseId) => {
    await db.query('DELETE FROM Courses WHERE course_id = ?', [courseId]);
};

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
