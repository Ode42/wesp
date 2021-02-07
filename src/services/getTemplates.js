const fs = require("fs");
const path = require("./../utils/base").path; // require path variable

const getTemplates = async () => { // function for getting html templates
    // get templates with synchronous readFileSync-function
    const header = fs.readFileSync(`${path}/views/header.html`, {encoding: "utf8", flag: "r"}, );
    const blog = fs.readFileSync(`${path}/views/blog.html`, {encoding: "utf8", flag: "r"}, );
    const footer = fs.readFileSync(`${path}/views/footer.html`, {encoding: "utf8", flag: "r"});
    

    return {
        header: header,
        blog: blog,
        footer: footer
    }; // return templates
}


module.exports = getTemplates;