export const Plural = (props: {
    number: number,
    singular: string,
    plural: string,
    withNumber?: boolean,
}) => {
    const {number, singular, plural, withNumber = true} = props
    let output = '';

    if(withNumber) {
        output += number + ' '
    }

    if (number === 1) {
        output += singular
    } else {
        output += plural
    }

    return output
}
