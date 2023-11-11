import images from "./images"

const navData = [
    {
        name: 'Services',
        href: 'services'
    },
    {
        name: 'About',
        href: 'about'
    },
    {
        name: 'Blog',
        href: 'blog'
    },
    {
        name: 'Contact',
        href: 'contact'
    },
]



const petsData = [
    {
        id: 1,
        category: 'cat',
        name: 'kyba',
        image: images.Pets1
    },
    {
        id: 2,
        category: 'bird',
        name: 'rotty',
        image: images.Pets2
    },
    {
        id: 3,
        category: 'fox',
        name: 'fexxie',
        image: images.Pets3
    },
    {
        id: 4,
        category: 'cat',
        name: 'kirra',
        image: images.Pets4
    },
    {
        id: 5,
        category: 'hamster',
        name: 'dinno',
        image: images.Pets5
    },
    {
        id: 6,
        category: 'parrot',
        name: 'paco',
        image: images.Pets6
    },
    {
        id: 7,
        category: 'parrot',
        name: 'pavo',
        image: images.Pets7
    },
    {
        id: 8,
        category: 'cat',
        name: 'ynna',
        image: images.Pets8
    },
    {
        id: 9,
        category: 'lion',
        name: 'hera',
        image: images.Pets9
    },
    {
        id: 10,
        category: 'bird',
        name: 'dimmy',
        image: images.Pets10
    },
    {
        id: 11,
        category: 'dog',
        name: 'jasper',
        image: images.Pets11
    },
    {
        id: 12,
        category: 'hamster',
        name: 'syu',
        image: images.Pets12
    },
]


const servicesData = [
    {
        image: images.ServiceIcon1,
        name: 'Pharmacy',
        desc: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation'
    },
    {
        image: images.ServiceIcon2,
        name: 'Breed-specific Haircuts',
        desc: "Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting."
    },
    {
        image: images.ServiceIcon3,
        name: 'Cloths',
        desc: "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready"
    },
]

const data = {
    navData,
    petsData,
    servicesData,
}


export default data