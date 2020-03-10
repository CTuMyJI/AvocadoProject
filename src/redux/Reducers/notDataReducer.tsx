let initialState = [
    {
        name: 'Helen',
        pow: 'Notary',
        address: 'Dnipro',
        ctel: '098 888 00 00',
        tel: '777 77 77',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3bfa43d9-6ed6-4006-878a-35edc1e09213-profile_image-300x300.png'
    },
    {
        name: 'Cris',
        pow: 'Notary',
        address: 'Kiev',
        ctel: '098 888 00 00',
        tel: '777 77 77',
        avatar: 'https://discordemoji.com/assets/emoji/4825_PepeClown.png'
    }
];

type initialStateType = typeof initialState

const notDataReducer = (state = initialState, action: any): initialStateType => {

    return state;
}

export default notDataReducer