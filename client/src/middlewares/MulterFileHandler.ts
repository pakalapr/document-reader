import Multer from "multer";

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `${__dirname}/audio-files`);
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});