const data = {
    about: {
        programming: {title: 'Программирование', desc: 'Увлекаюсь программированием'},
        music: {title: 'Музыка', desc: 'Увлекаюсь музыкой'}
    },

    programming: [{
        title: ' Теоретический курс js №1', 
        link: 'https://github.com/sweet198/js-course'
    },       
    {
        title: 'Теоретический курс js №2',
        link: 'https://github.com/sweet198/js-course2'
    },
    {
        title: 'Теоретический курс js №3',
        link: 'https://github.com/sweet198/js-course3'
    }
],

    music: [{
            title: 'Это все', 
            code: 'https://www.youtube.com/embed/upsVpf8U-Jo'
        },       
        {
            title: 'Аривидерчи',
            code: 'https://www.youtube.com/embed/Y_SWO9WleDo'
        },
        {
            title: 'Баста',
            code: 'https://www.youtube.com/embed/WFL7PIkZxXA'
        }
    ],

    sections: {
        about: {id:'about-section', sectionClass: 'about-section', title: 'Мои увлечения', desc: 'Увлекаюсь программированием и музыкой'},
        programming: {id:'programming-section', sectionClass: 'programming-section', title: 'Пройденные курсы', desc: 'Увлекаюсь программированием. Часть пройденных курсов:'},
        music: {id: 'music-section', sectionClass: 'music-section', title: 'Музыка', desc: 'Увлекаюсь музыкой'}     
    },
    
    contacts: {
        tel: {desc: '+7 (911) 703-19-03', href: 'tel:+79117031903'},
        mail: {desc: 'svitkovskiy198@gmail.com', href: 'mailto:svitkovskiy198@gmail.com'}
    },

    mainNav: {
        about: {title: 'Мои увлечения', href: '#about-section'},
        programming: {title: 'Программирование', href: '#programming-section'},
        music: {title: 'Музыка', href: '#music-section'}    
    },    

    socials: {
        vk: {title: 'vk', href: 'https://vk.com/svitkovskiyvlad'},
        instagram: {title: 'instagram', href: 'https://www.instagram.com/vladsvitkovskiy/'},
        youtube: {title: 'youtube', href: 'https://www.youtube.com/channel/UCHCgHjIOZJFpN1tKrKhJNEQ'},
    }
}

export default data;






   