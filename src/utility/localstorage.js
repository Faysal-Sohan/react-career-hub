const getItemFromLS = () => {
    const items = localStorage.getItem('applied-jobs');
    if(items){
        return JSON.parse(items);
    }
    return [];
}

const saveItemToLS = id => {
    const previousItems = getItemFromLS();
    const exists = previousItems.find(jobId => jobId === id);
    if(!exists) {
        const newItems = [...previousItems, id];
        localStorage.setItem('applied-jobs', JSON.stringify(newItems));
    } 
}

export {getItemFromLS, saveItemToLS};