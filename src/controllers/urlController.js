import Url from "../models/Url.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortCode = nanoid(6);
  const newUrl = new Url({ url, shortCode });

  try {
    await newUrl.save();
    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortCode });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    url.accessCount += 1;
    await url.save();

    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const updatedUrl = await Url.findOneAndUpdate(
      { shortCode },
      { url, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedUrl) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.status(200).json(updatedUrl);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const deletedUrl = await Url.findOneAndDelete({ shortCode });

    if (!deletedUrl) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUrlStats = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
