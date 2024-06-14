const { getUserProgress, updateUserProgress } = require('../models/progressModel');

const getProgress = async (req, res) => {
    const { id } = req.params;
    const progress = await getUserProgress(id);
    res.json(progress);
};

const updateProgress = async (req, res) => {
    const { id } = req.params;
    const { courseId, lessonId, status } = req.body;
    await updateUserProgress(id, courseId, lessonId, status);
    res.sendStatus(204);
};

module.exports = { getProgress, updateProgress };
 