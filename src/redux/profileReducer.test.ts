import profileReducer, {addPostAC, ProfilePageType, updateNewPostTextAC} from "./profileReducer";

test('add post', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'My first post', likesCount: '23'},
            {id: '2', message: 'Post about my life', likesCount: '11'},
            {id: '3', message: 'Some famous quote', likesCount: '4'},
            {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
            {id: '5', message: 'Nothing happen', likesCount: '0'},
            {id: '6', message: 'Boring post', likesCount: '2'},
        ],
        newPostText: 'text for test',
        profile: null
    }

    const action = addPostAC()

    const endState = profileReducer(startState, action)

    expect(endState.posts[endState.posts.length - 1].message).toBe('text for test')
    expect(endState.posts.length).toBe(7)
})
test('update new post text', () => {
    const startState: ProfilePageType = {
        posts: [
            {id: '1', message: 'My first post', likesCount: '23'},
            {id: '2', message: 'Post about my life', likesCount: '11'},
            {id: '3', message: 'Some famous quote', likesCount: '4'},
            {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
            {id: '5', message: 'Nothing happen', likesCount: '0'},
            {id: '6', message: 'Boring post', likesCount: '2'},
        ],
        newPostText: '',
        profile: null
    }

    const action = updateNewPostTextAC('text for test')

    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe('text for test')
})