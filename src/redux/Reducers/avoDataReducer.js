let initialState = [
    {
        name: 'Салтисюк Юрій Миколайович',
        pow: 'Адвокат по кримінальним справам',
        address: 'смт. Магдалинівка, Дніпропетровська обл.',
        ctel: '090 888 00 00',
        tel: '111 77 77',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-3EOwKjoTvD-_H9sgR3JCKT7h-3vUnstuwTAsKZOIjFYFQ9O'
    },
    {
        name: 'Бондар Інна Василівна',
        pow: 'Адвокат по цивільним справам',
        address: 'Донецьке шосе 2/76',
        ctel: '098 888 00 00',
        tel: '333 77 77',
        avatar: 'https://i.pinimg.com/736x/e4/bd/98/e4bd98a58bac3e45c8c4fbd919650b1d--marine-smile.jpg'
    }
];

const avoDataReducer = (state = initialState, action) => {
    return state;
}

export default avoDataReducer