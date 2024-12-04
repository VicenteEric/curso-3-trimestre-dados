const getCSS = (variavel) => {
    return  getComputedStyle(document.body).getPropertyValue(variavel)
     
}

const tickConfig = {
    family: getCSS('--primary-color'),
    size: 16,
    color: getCSS('--font')
}

export {getCSS, tickConfig}