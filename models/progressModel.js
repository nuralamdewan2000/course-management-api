const db = require('../config/db');

const getUserProgress = async (userId) => {
    const [rows] = await db.query('SELECT * FROM Progress WHERE user_id = ?', [userId]);
    return rows;
};

const updateUserProgress = async (userId, courseId, lessonId, status) => {
    await db.query('INSERT INTO Progress (user_id, course_id, lesson_id, status) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE status = VALUES(status)', [userId, courseId, lessonId, status]);
};

module.exports = { getUserProgress, updateUserProgress };
