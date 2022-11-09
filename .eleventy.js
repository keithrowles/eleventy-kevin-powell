
const { DateTime } = require("luxon");

module.exports = function(elentyConfig) {

    elentyConfig.addPassthroughCopy('./src/style.css');
    elentyConfig.addPassthroughCopy('./src/assets');
    elentyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};