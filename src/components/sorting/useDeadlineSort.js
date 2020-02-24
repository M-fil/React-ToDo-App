import { useState } from 'react';

function useDeadlineSort() {
    const [isDescSort, setIsDescSort] = useState(false);

    const sortSample = (array, isDesc) => {
        switch (isDesc) {
            case false : 
                array.sort((a, b) => {
                    return new Date(a.deadline.toLocaleString()) - new Date(b.deadline.toLocaleString());
                });
            break;

            case true : 
                array.sort((a, b) => {
                    return new Date(b.deadline.toLocaleString()) - new Date(a.deadline.toLocaleString());
                });
            break;

            default: return array;
        }
    }

    return {
        sortSample,
        isDescSort, 
        setIsDescSort
    }
}

export default useDeadlineSort;
