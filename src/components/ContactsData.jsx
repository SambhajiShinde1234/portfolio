import { ImWhatsapp } from "react-icons/im";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram} from "react-icons/sl";
import { SlSocialGithub} from "react-icons/sl";
import { FiMail } from "react-icons/fi";

const ContactsData = [
    {
        id: 0,
        logo: <ImWhatsapp size={30} />,
        title: 'WhatsApp',
        address: '+91 9699828358',
        url: 'https://wa.me/919699828358',
        sendTitle: 'Send message',
    },
    {
        id: 1,
        logo: <SlSocialLinkedin size={30}/>,
        title: 'LinkedIn',
        address: 'sambhajishinde99',
        url: 'https://www.linkedin.com/in/sambhajishinde99/',
        sendTitle: 'Send message',
    },
    {
        id: 2,
        logo: <SlSocialInstagram size={30}/>,
        title: 'Instagram',
        address: '_sambhaji.shinde',
        url: 'https://www.instagram.com/_sambhaji.shinde/',
        sendTitle: 'DM me',
    },
    {
        id: 3,
        logo: <FiMail size={30}/>,
        title: 'Mail',
        address: 'mr.sam.shinde@gmail.com',
        url: 'https://wa.me/919699828358',
        sendTitle: 'Send mail',
    },
    {
        id: 4,
        logo: <SlSocialGithub size={30}/>,
        title: 'GitHub',
        address: 'SambhajiShinde1234',
        url: 'https://github.com/SambhajiShinde1234',
        sendTitle: 'Follow me',
    },
   
]
   
export default ContactsData;