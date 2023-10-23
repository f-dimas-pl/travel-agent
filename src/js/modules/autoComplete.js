import autoComplete from '@tarekraafat/autocomplete.js';
import countryList from './../helpers/countryList';

function autoCompleteFunc () {
    const autoCompleteJS = new autoComplete({
        selector: '#autoComplete',
        placeHolder: 'e.g Bali, Indonesia',
        data: {
            src: countryList,
            cache: false,
        },
        resultItem: {
            higlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                },
            },
        },
        resultList: {
            maxResults: 10,
        },
    
        searchEngine: 'strict',
    });
}

export default autoCompleteFunc;