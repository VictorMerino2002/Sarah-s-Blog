export const capFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const sortPosts = (postList) => {
    return postList.sort((a, b) => new Date(b.date) - new Date(a.date))
}