const getImage = (image_url,title="") => {
    return {
        type:"image",
        title:{
            ...getText(title),
            emoji:true
        },
        image_url,
        alt_text:"Alt image"
    }
}

const getHeader = (text) => {
    return {
        type:"header",
        text:{
            ...getText(text),
            emoji:true
        }
    }
}

const getText = (text) => {
    return {
        type:"mrkdwn",
        text
    }
}

const getTextSection = (text) => {
    return {
        type:"section",
        text:getText(text)
    }
}

const getPlainText = (text) => {
    return {
        type:"plain_text",
        text
    }
}

const getPlainTextSection = (text) => {
    return {
        type:"section",
        text:getPlainText(text)
    }
}

const divider = {
    type:"divider"
}

export {
    getImage,
    getHeader,
    getText,
    getTextSection,
    getPlainText,
    getPlainTextSection,
    divider
}