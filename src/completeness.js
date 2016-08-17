(function () {
    const html = document.querySelector('html');

    var completeness = document.createElement('div');
    completeness.classList = 'completeness-line';

    const completenessStyles = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '70%',
        height: '10px',
        backgroundColor: '#2f2f2f',
        transition: 'all .1s',
    };

    document.querySelector('body').appendChild(completeness);
    Object.assign(completeness.style, completenessStyles);

    const setWidth = (element, width = 0) => {
        element.style.width = width;
    };

    const calcCompleteness = function () {
        let progress = ((window.pageYOffset) / (html.offsetHeight - window.innerHeight)) * 100;
        return `${progress}%`;
    };

    document.addEventListener('scroll', () => setWidth(completeness, calcCompleteness()));

    setWidth(completeness, calcCompleteness());
})();