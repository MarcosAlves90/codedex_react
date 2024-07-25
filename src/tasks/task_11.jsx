export function Task11() {
    const catalogItems = [{
        name: "Cube",
        category: "Square",
        website: "square.com"
    }, {
        name: "Sphere",
        category: "Circle",
        website: "circle.com"
    }, {
        name: "Pyramid",
        category: "Triangle",
        website: "triangle.com"
    }]
    return <div>
        {catalogItems.map(function (item) {
            return (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <h3>Specialty: {item.category}</h3>
                    <a href={item.website}>Learn more</a>
                </div>
            )
        })}
    </div>
}
