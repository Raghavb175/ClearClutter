import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath = "c:\\Users\\ragha\\OneDrive\\Desktop\\clear clutter"
// console.log(fs)
let files = await fs.readdir(basepath)
// console.log(files);
for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1]
    // console.log(ext)
    if (fsn.existsSync(path.join(basepath, ext))&& ext!= "js" && ext !="json" && ext != "git"){
        //move the file to the folder
fs.rename(path.join(basepath, items),path.join(basepath,ext,items) )
    }
    else{
        fs.mkdir(ext)
    }
    console.log(items)
}