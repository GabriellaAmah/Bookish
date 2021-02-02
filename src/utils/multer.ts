/* eslint-disable no-constant-condition */
import multer from 'multer'


const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'PDF' )
    },

    filename: (_req, file, cb) => {
        cb(null, file.originalname)
    }
})


const uploads = multer({
    storage: storage, fileFilter: (_req, file, cb) => {
        if (file.mimetype !== 'application/pdf' && 'application/epub') {
            return cb(new Error('Incorrect file format : we only accept pdf and epub'))
        } else {
            cb(null, true)
        }
    }
}).single('book')

export default uploads