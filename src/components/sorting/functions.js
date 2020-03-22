export const sortSample = (array, isDesc) => {
    switch (isDesc) {
        case false : return array.sort((a, b) => {
            return new Date(a.deadline.toLocaleString()) - new Date(b.deadline.toLocaleString());
        });

        case true : return array.sort((a, b) => {
                return new Date(b.deadline.toLocaleString()) - new Date(a.deadline.toLocaleString());
        });

        default: return array; 
    }
}