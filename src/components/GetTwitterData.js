

const axios = require("axios");


const config = {
    method: "get",
    url:`https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=kiritotwt1
`
}

async function getty() {
    let tweetData = null;
    await axios.get(config.url).then((data)=>tweetData = data.data);

    return tweetData[0];
}

export default getty().toString();
