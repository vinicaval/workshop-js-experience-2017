
export default function (item){
    if(!item) return ''
    return `
        <li class="collection-item">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
        </li>
    `
}