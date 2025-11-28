import loftImg from '../assets/Properties/Modern-Loft.jpg'
import apartmentImg from '../assets/Properties/Apartment.jpg'
import villaImg from '../assets/Properties/Beyond-Villa-4.jpg'
import penthouseImg from '../assets/Properties/Penthouse.jpg'

export default [
    {
        id: 1,
        title: "Sea View Apartment",
        location: "Camps Bay",
        price: 2000,
        type: "Apartment",
        available: true,
        image: apartmentImg
    },
    {
        id: 2,
        title: "Modern Loft",
        location: "Woodstock",
        price: 1200,
        type: "Loft",
        available: false,
        image: loftImg
    },
    {
        id: 3,
        title: "Luxury Villa",
        location: "Clifton",
        price: 6500,
        type: "Villa",
        available: true,
        image: villaImg
    },
    {
        id: 4,
        title: "Waterfront Penthouse",
        location: "V&A Waterfront",
        price: 6000,
        type: "Penthouse",
        available: true,
        image: penthouseImg
    }
];