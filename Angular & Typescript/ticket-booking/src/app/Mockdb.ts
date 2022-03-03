import { Movie } from "./MockInterface"
import { Premier } from "./MockInterface"
import { Seat } from "./MockInterface"

export const seats:Seat = {
    seatAreaLeft : ['AL','BL','CL','DL','EL','FL','GL','HL'],
    seatAreaRight : ['AR','BR','CR','DR','ER','FR','GR','HR'],
    seatNumber : [1,2,3,4]
}

export const MOVIES: Movie[] = [
    {
        img : '../../assets/movie1.jpg',
        movieTitle : 'FIR',
        genre : 'Thriller',
        banner : '../../assets/FIR-banner.jpg',
        votes: '84%',
        time: '2h 58m',
        cert: 'UA',
        date: '24,Feb,2022',
        theatre : [
            {
               name : 'AGS Cinemas',
               timings : ['4:30AM','10:45AM','06:30PM'], 
               seats : seats
            },
            {
                name : 'EVP Cinemas',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
             },
             {
                name : 'Kasi Talkies',
                timings : ['01:00PM','04:00PM','07:30PM'],
                seats : seats
             },
             {
                name : 'Sathyam Cinemas',
                timings : ['12:00PM','07:00PM','10:30PM'],
                seats : seats
             },
             {
                name : 'Gokul Theatres',
                timings : ['12:00PM','03:00PM','10:30PM'],
                seats : seats
             }
        ]
    },
    {
        img : '../../assets/movie2.jpg',
        movieTitle : 'UNCHARTED',
        genre : 'Action',
        banner : '../../assets/movie2-banner.jpg',
        votes: '84%',
        time: '2h 20m',
        cert: 'UA',
        date: '21,Feb,2022',
        theatre : [
            {
               name : 'GK Cinemas',
               timings : ['12:00PM','03:00PM','07:00PM','10:40PM'],
               seats : seats
            },
            {
                name : 'Sathyam Cinemas',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
             },
             {
                name : 'Gokulam Cinemas',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
             },
            {
                name : 'Green Cinemas',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
            },
            {
                name : 'INOX National',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
            }
        ]
    },
    {
        img : '../../assets/movie3.jpg',
        movieTitle : 'Veerapandiyapuram',
        genre : 'Action',
        banner : '../../assets/movie3-banner.jpg',
        votes: '84%',
        time: '2h 34m',
        cert: 'UA',
        date: '17,Feb,2022',
        theatre : [
            {
               name : 'Jothi Theatre',
               timings : ['09:00AM','02:00PM','05:00PM','11:30PM'],
               seats : seats
            },
            {
                name : 'Kasi Talkies',
                timings : ['11:00AM','06:30PM','07:30PM'],
                seats : seats
            },
            {
                name : 'Luxe Cinemas',
                timings : ['12:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
            },
            {
                name : 'Sathyam Cinemas',
                timings : ['11:00PM','03:00PM','07:00PM','10:30PM'],
                seats : seats
            },
            {
                name : 'Gokumal Cinemas',
                timings : ['03:00PM','07:00PM','10:30PM'],
                seats : seats
            }
        ]
    },
    {
        img : '../../assets/movie4.jpg',
        movieTitle : 'Neyyattinkara Gopante Aaraattu',
        genre : 'Comedy',
        banner : '../../assets/movie4-banner.jpg',
        votes: '84%',
        time: '2h 43m',
        cert: 'UA',
        date: '10,Feb,2022',
        theatre : [
            {
                name : 'Kumaran Theatres',
                timings : ['11:00AM','06:30PM','07:30PM','10:30PM'],
                seats : seats
            },
            {
                name : 'Mani Talkies',
                timings : ['11:00AM','06:30PM','07:30PM','02:30PM'],
                seats : seats
            },
            {
                name : 'Kasi Talkies',
                timings : ['11:00AM','06:30PM','07:30PM','12:30PM'],
                seats : seats
            },
            {
                name : 'Kasi Talkies',
                timings : ['11:00AM','06:30PM'],
                seats : seats
            },
            {
                name : 'Kasi Talkies',
                timings : ['11:00AM','06:30PM','05:30PM'],
                seats : seats
            }
        ]
    },
    {
        img : '../../assets/movie5.jpg',
        movieTitle : 'Kadaisi Vivasayi',
        genre : 'Comedy',
        banner : '../../assets/movie5-banner.jpg',
        votes: '84%',
        time: '2h 50m',
        cert: 'UA',
        date: '1,Feb,2022',
        theatre : [
            {
               name : 'EVP Cinemas',
               timings : ['11:00AM','06:30PM','05:30PM'],
               seats : seats
            },
            {
                name : 'Kasi Talkies',
                timings : ['12:00PM','06:30PM','05:30PM'],
                seats : seats
            },
            {
                name : 'Gokulam Cinemas',
                timings : ['01:00PM','06:30PM','05:30PM'],
                seats : seats
            },
            {
                name : 'Sathyam Cinemas',
                timings : ['10:00AM','06:30PM','05:30PM'],
                seats : seats
            },
            {
                name : 'Hari Cinemas',
                timings : ['10:30AM','06:30PM','05:30PM'],
                seats : seats
            }
        ]
    },
]

export const PREMIERES: Premier[] = [
    {
        img : '../../assets/premier1.avif',
        title : 'Resident Evil: Welcome To Raccoon City',
        language : 'English',
    },
    {
        img : '../../assets/premier2.avif',
        title : 'Die In A Gunfight',
        language : 'English',
    },
    {
        img : '../../assets/premier3.avif',
        title : 'The Hating Game',
        language : 'English',
    },
    {
        img : '../../assets/premier4.avif',
        title : 'Fatale',
        language : 'English',
    },
    {
        img : '../../assets/premier5.avif',
        title : 'Half Brothers',
        language : 'English',
    },
]

