const getBoldText = (text) => {
    return '*'+text+'*';
}

const getItalicText = (text) => {
    return '_'+text+'_';
}

const getStrikedText = (text) => {
    return '~'+text+'~';
}

const getTextAsLink = (text) => {
    return '<'+text+'>';
}

const getTextAsEmoji = (text) => {
    return ':'+text+':';
}

const getCodeBlock = (text) => {
    return '```'+text+'```';
}

export {
    getBoldText,
    getItalicText,
    getStrikedText,
    getTextAsLink,
    getTextAsEmoji,
    getCodeBlock,
}