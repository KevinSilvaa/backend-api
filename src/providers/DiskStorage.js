const fs = require("fs");
const path = require("path");
const uplodadConfig = require("../configs/upload");

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uplodadConfig.TMP_FOLDER, file),
            path.resolve(uplodadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }   

    async deleteFile(file) {
        const filePath = path.resolve(uplodadConfig.UPLOADS_FOLDER, file);
        
        try {
            fs.promises.stat(filePath);
        } catch (error) {
            return console.error(error);
        }

        await fs.promises.unlink(filePath);
    }
}

module.exports = DiskStorage;
