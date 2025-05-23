import Leave from "../models/Leave.js";

export const createLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
