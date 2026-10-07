import { assetUrl } from '../utils/assetUrl';

export const weddingData = {
  dateLabel: '01 November 2026',
  fullDate: '2026-11-01T08:30:00+05:30',
  time: '8:30 AM – 9:30 AM',
  venue: 'Hooriya Auditorium',
  location: 'Puthantheru, Malappuram, Kerala',
  venueString: 'Hooriya Auditorium, Puthantheru, Malappuram, Kerala',
  venueUrl: 'https://maps.app.goo.gl/U8UFpzyLZpbY55f78',
  invitationMessage:
    'With the blessings of our beloved family, we warmly invite you to celebrate two beautiful beginnings on one unforgettable day.',
  couples: {
    nikhilSneha: {
      slug: 'nikhil-sneha',
      coupleName: 'Nikhil & Sneha',
      groom: 'Nikhil',
      bride: 'Sneha',
      accent: '#915f3f',
      heroImage: assetUrl('images/nikhil.png'),
      memoryImages: [
        assetUrl('images/nikhil-sneha/memory-05.png'),
        assetUrl('images/nikhil-sneha/memory-06.png'),
        assetUrl('images/nikhil-sneha/memory-07.png'),
        assetUrl('images/nikhil-sneha/memory-08.png'),
        assetUrl('images/nikhil-sneha/memory-09.png'),
      ],
      timeline: [
        { time: '8:30 AM', title: 'Wedding Ceremony Begins' },
        { time: '9:00 AM', title: 'Wedding Rituals' },
        { time: '9:30 AM', title: 'Ceremony Concludes' },
      ],
    },
    nithyaAjaydev: {
      slug: 'nithya-ajaydev',
      coupleName: 'Nithya & Ajaydev',
      bride: 'Nithya',
      groom: 'Ajaydev',
      accent: '#6d5645',
      heroImage: assetUrl('images/nithya.png'),
      memoryImages: [
        assetUrl('images/nithya-ajaydev/memory-05.png'),
        assetUrl('images/nithya-ajaydev/memory-06.png'),
        assetUrl('images/nithya-ajaydev/memory-07.jpeg'),
        assetUrl('images/nithya-ajaydev/memory-08.jpeg'),
        assetUrl('images/nithya-ajaydev/memory-09.png'),
      ],
      timeline: [
        { time: '8:30 AM', title: 'Wedding Ceremony Begins' },
        { time: '9:00 AM', title: 'Wedding Rituals' },
        { time: '9:30 AM', title: 'Ceremony Concludes' },
      ],
    },
  },
};

export const coupleOrder = ['nikhilSneha', 'nithyaAjaydev'];
