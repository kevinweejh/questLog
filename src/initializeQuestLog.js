export default () => {
    const questLogInitialized = localStorage.getItem('questLog');

    if (!questLogInitialized) {
        localStorage.setItem('questLog', JSON.stringify([]));
    }
}