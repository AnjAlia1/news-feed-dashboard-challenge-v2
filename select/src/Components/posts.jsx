const Post = () => {
    const categories = [
        { id: 1, name: 'Technology' },
        { id: 2, name: "Fashion" },
        { id: 3, name: "Food" },
        { id: 4, name: "Travel" },
        { id: 5, name: "Lifestyle" },
        { id: 6, name: "Sports" }

    ]
    return (
        categories.map((category) => category.name)
    )
}

export { Post, categories } 