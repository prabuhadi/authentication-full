import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  // proteksi endpoint database user
  // next untuk middleware, agar tidak langsung akes user harus login terlebih dahulu
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke Akun Anda" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

// New Function : agar edit database user hanya dilakukan oleh admin
export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "Akses ditolak" });
  next();
};
