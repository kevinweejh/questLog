export default () => {
    const container = document.querySelector('body');
    if (container.querySelector('#fullQuestLog')) {
        container.removeChild(container.querySelector('#fullQuestLog'));
    }
}