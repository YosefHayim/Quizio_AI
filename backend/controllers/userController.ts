import type { Request, Response } from "express";

import { supabase } from "../config";

const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { data: user } = await supabase.from("users").select("*").eq("id", req.params.userId);
    if (user) res.status(200).json({ status: "success", data: user });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch user info" });
    console.error("Error fetching user info:", error);
  }
};

export default getUserInfo;
