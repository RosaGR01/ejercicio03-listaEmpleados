/*
  La siguiente lista de empleados debe ser ordenada con base a 
  la fecha de contratación, omitir los que ya no estan activos y 
  presentarla con el siguiente formato:
  [
  {
  name: '',
  job: {
  position: '',
  description: '',
  },
  avatar: '',
  link: '' // Solo el primero en la lista
  hireDate: '',
  email: '' // Nombre en minúsculas, los espacios se reemplazan por puntos y se agrega @correo.com
  }
  ]
 */

 const employees = [
    {
    name: "Eshaan Ravish",
    jobPosition: "Phython Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/eshaan.jpg",
    links: [
    "https://www.facebook.com/eshaan.ravish",
    "https://github.com/ravisheshaan",
    "https://www.linkedin.com/in/eshaan-ravish-7a573567/",
    ],
    hireDate: new Date('2011-10-30'),
    status: true,
    },
    {
    name: "Aakriti Kashyap",
    jobPosition: "Front End - Intern",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/aakriti.jpg",
    links: [
    "https://www.linkedin.com/in/aakriti-kashyap-2a134359/",
    "https://www.facebook.com/aakriti.kashyap.33",
    "https://github.com/Aakriti94",
    ],
    hireDate: new Date('2010-01-14'),
    status: true,
    },
    {
    name: "Ravi Dhiman",
    jobPosition: "Front End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ravi.jpg",
    links: [
    "https://github.com/ravid7000",
    "https://www.facebook.com/dhiman90",
    "https://www.linkedin.com/in/ravidhiman17/",
    ],
    hireDate: new Date('2010-02-11'),
    status: true,
    },
    {
    name: "Sanyam Bansal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/sanyam.jpg",
    links: [
    "https://www.facebook.com",
    "https://www.linkedin.com/in/sanyam76/",
    "https://github.com/sanyam199",
    ],
    hireDate: new Date('2010-02-11'),
    status: true,
    },
    {
    name: "Pankul Mittal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pankul.jpg",
    links: [
    "https://www.linkedin.com/",
    "https://www.facebook.com",
    "https://github.com/Pankul-Mittal",
    ],
    hireDate: new Date('2011-07-01'),
    status: true,
    },
    {
    name: "Pushp sharma",
    jobPosition: "Business Development",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/pushp.jpg",
    links: [
    "https://github.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    ],
    hireDate: new Date('2011-12-01'),
    status: false,
    },
    {
    name: "Lakshay Lakhani",
    jobPosition: "Back End Development",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/lakshay.jpg",
    links: [
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    "https://github.com/",
    ],
    hireDate: new Date('2009-03-21'),
    status: true,
    },
    {
    name: "Ankit Bhati",
    jobPosition: "Back End - Intern",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/ankit.jpg",
    links: [
    "https://github.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com",
    ],
    hireDate: new Date('2012-08-17'),
    status: false,
    },
    {
    name: "Asif Akhtar",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/asif.jpg",
    links: [
    "https://www.linkedin.com/in/asif-akhtar-83b7a195/",
    "https://www.facebook.com/asif.akhtar.7106",
    "https://github.com/asif1011",
    ],
    hireDate: new Date('2009-06-23'),
    status: true,
    },
    {
    name: "Nitish Kansal",
    jobPosition: "Back End Developer",
    jobDescription: "Front-End Developer for web and mobile applications, who is motivated to combine the art of design with the art of programming. Responsibilities include translation of the UI/UX design wireframes to actual code that produce visual elements of the application. I work with the UI/UX designer and bridge the gap.",
    avatar: "https://tas-dp-prod-media.s3.amazonaws.com/profiles/nitish.jpg",
    links: [
    "https://github.com/nitishkansal",
    "https://www.facebook.com/tanu.kansal",
    "https://www.linkedin.com/in/nitish-kansal-57111647/",
    ],
    hireDate: new Date('2013-10-17'),
    status: true,
    }
];
const filtrados = employees.filter(estado => estado.status )
.sort((a,b)=> a.hireDate - b.hireDate)

const empleados = filtrados.map(imprimir =>{
    return {
        name: imprimir.name,
        job: {
            position: imprimir.jobPosition,
            description: imprimir.jobDescription,
        },
        avatar: imprimir.avatar,
        link: imprimir.links[0],
        hireDate: imprimir.hireDate,
        email: imprimir.name.split(' ').join('-').toLowerCase() +'@correo.com'
    }
});
console.log(empleados);