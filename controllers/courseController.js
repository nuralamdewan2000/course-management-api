const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../models/courseModel');

const getCourses = async (req, res) => {
    const courses = await getAllCourses();
    res.json(courses);
};

const getCourse = async (req, res) => {
    const { id } = req.params;
    const course = await getCourseById(id);
    if (!course) return res.sendStatus(404);
    res.json(course);
};

const create = async (req, res) => {
    const { title, description } = req.body;
    const teacherId = req.user.userId;
    const courseId = await createCourse(title, description, teacherId);
    res.status(201).json({ courseId });
};

const update = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await updateCourse(id, title, description);
    res.sendStatus(204);
};

const remove = async (req, res) => {
    const { id } = req.params;
    await deleteCourse(id);
    res.sendStatus(204);
};

module.exports = { getCourses, getCourse, create, update, remove };
