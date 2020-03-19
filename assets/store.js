export default function store(namespace, data) {
    if(data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }

    data = localStorage.getItem(namespace);
    return (data && JSON.parse(data)) || {};
}